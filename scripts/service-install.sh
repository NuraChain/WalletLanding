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

SERVICE_USER="${SERVICE_USER:-www-data}"
SERVICE_PORT="${SERVICE_PORT:-4100}"
SERVICE_HOST="${SERVICE_HOST:-127.0.0.1}"

SERVICE_DIR="${SERVICE_DIR:-/etc/systemd/system}"
SERVICE_FILE="$SERVICE_DIR/${SERVICE_NAME}.service"

# The whole site is one directory of static files. Without it there is nothing
# to serve, and serve.mjs exits rather than starting an empty server.
if [ ! -f "$ROOT/dist/index.html" ]; then
  echo "warning: dist/index.html is missing - run 'npm run build' before starting" >&2
fi

echo "> Installing systemd service (${SERVICE_FILE})..."
echo "> Repository: $ROOT"
echo "> Node:       $NODE_BIN"
echo "> Entry:      $SERVICE_ENTRY"
echo "> Listening:  $SERVICE_HOST:$SERVICE_PORT"

cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=Nura Wallet landing page - static site
After=network.target

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
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadOnlyPaths=$ROOT

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable "$SERVICE_NAME"

echo "> Service installed successfully."
echo "> Unit: $SERVICE_FILE"

if systemctl is-active --quiet "$SERVICE_NAME"; then
  echo "> Restarting $SERVICE_NAME..."
  systemctl restart "$SERVICE_NAME"
else
  echo "> Starting $SERVICE_NAME..."
  systemctl start "$SERVICE_NAME"
fi

echo
systemctl status "$SERVICE_NAME" --no-pager
