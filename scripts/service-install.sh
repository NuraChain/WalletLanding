#!/bin/bash
#
# Installs the systemd unit that serves dist/ behind nginx.
#
#   sudo npm run service:install
#
# The unit runs scripts/serve.mjs on 127.0.0.1:4100. nginx proxies to it and
# rewrites the placeholder origin into the real domain - see the README. If
# nginx serves dist/ from disk instead, none of this is needed.

set -euo pipefail

SERVICE_NAME="wallet-landing"

NODE_BIN="${NODE_BIN:-$(command -v node || true)}"

if [ -z "$NODE_BIN" ]; then
  echo "error: node binary not found (set NODE_BIN to override)" >&2
  exit 1
fi

if [ "$(id -u)" -ne 0 ]; then
  echo "error: writing the unit file needs root - re-run with sudo" >&2
  exit 1
fi

# Repository root: this script lives in <root>/scripts/.
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SERVICE_ENTRY="$ROOT/scripts/serve.mjs"

# Whoever owns the checkout, because that is the account certain to be able to
# read it. A repository in a home directory is usually mode 700, so a shared
# account like www-data cannot even traverse into it - which is what makes
# systemd fail at CHDIR before the process starts. Override deliberately:
#
#   SERVICE_USER=www-data npm run service:install
SERVICE_USER="${SERVICE_USER:-$(stat -c '%U' "$ROOT")}"
SERVICE_PORT="${SERVICE_PORT:-4100}"
SERVICE_HOST="${SERVICE_HOST:-127.0.0.1}"

# Check it rather than discover it from a failed unit. `test -r` on a file
# inside ROOT needs every parent directory to be traversable too, which is
# exactly the permission systemd needs and the one that goes missing.
if [ "$SERVICE_USER" != "root" ] && command -v runuser > /dev/null; then
  if ! runuser -u "$SERVICE_USER" -- test -r "$ROOT/package.json"; then
    echo "error: $SERVICE_USER cannot read $ROOT - the unit would fail at CHDIR" >&2
    echo "       either 'chmod o+rx' every directory on that path, move the" >&2
    echo "       checkout somewhere readable such as /srv, or install with" >&2
    echo "       SERVICE_USER=<user> npm run service:install" >&2
    exit 1
  fi
fi

SERVICE_DIR="${SERVICE_DIR:-/etc/systemd/system}"
SERVICE_FILE="$SERVICE_DIR/${SERVICE_NAME}.service"

# The whole site is one directory of static files. Without it there is nothing
# to serve, and serve.mjs exits rather than starting an empty server.
HAS_BUILD=1

if [ ! -f "$ROOT/dist/index.html" ]; then
  HAS_BUILD=0
fi

echo "> Installing systemd service (${SERVICE_FILE})..."
echo "> Repository: $ROOT"
echo "> Node:       $NODE_BIN"
echo "> Entry:      $SERVICE_ENTRY"
echo "> User:       $SERVICE_USER"
echo "> Listening:  $SERVICE_HOST:$SERVICE_PORT"

cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=Nura Wallet landing page - static site
After=network.target

# serve.mjs exits rather than serving an empty site, so a missing build would
# otherwise restart forever every five seconds.
StartLimitIntervalSec=60
StartLimitBurst=5

[Service]
Type=simple

User=$SERVICE_USER
Restart=always
RestartSec=5

Environment=NODE_ENV=production
Environment=HOST=$SERVICE_HOST
Environment=PORT=$SERVICE_PORT

# serve.mjs resolves dist/ from its own location, so this is only where
# relative paths in the logs are printed from.
WorkingDirectory=$ROOT

ExecStart=$NODE_BIN $SERVICE_ENTRY

# journald, not a log file: the process writes one line at startup and nothing
# else, so there is nothing to rotate.
StandardOutput=journal
StandardError=journal

# It reads one directory of static files and talks to a socket.
#
# ProtectHome is read-only, NOT true: `true` makes /home appear empty to the
# service, and a checkout in a home directory would then be unreachable however
# the file permissions are set.
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=read-only
ReadOnlyPaths=$ROOT

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable "$SERVICE_NAME"

echo "> Service installed successfully."
echo "> Unit: $SERVICE_FILE"

if [ "$HAS_BUILD" -eq 0 ]; then
  echo
  echo "> dist/index.html is missing, so the service is installed but not started."
  echo "> Run 'npm run build', then 'npm run service:start'."
  exit 0
fi

if systemctl is-active --quiet "$SERVICE_NAME"; then
  echo "> Restarting $SERVICE_NAME..."
  systemctl restart "$SERVICE_NAME"
else
  echo "> Starting $SERVICE_NAME..."
  systemctl start "$SERVICE_NAME"
fi

echo
systemctl status "$SERVICE_NAME" --no-pager
