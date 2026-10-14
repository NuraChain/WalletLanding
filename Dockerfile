# Builds the prerendered site and serves it with scripts/serve.mjs.
#
#   docker build -t wallet-landing .
#   docker run --rm -p 4100:4100 wallet-landing
#
# Two stages, because the two halves want opposite things: the build needs the
# whole toolchain, and what runs needs none of it - dist/ is already static and
# serve.mjs imports nothing outside node:.

FROM node:24-bookworm-slim AS build

WORKDIR /app

# playwright is a devDependency for qa:visual only. The build never opens a
# browser, so it should not download one.
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# The manifests alone first, so the install layer is reused until they change.
COPY package.json package-lock.json ./

# --include=dev: vite, tsc and tailwind are all devDependencies, and a
# NODE_ENV=production handed to the build from outside would drop them.
RUN npm ci --include=dev

COPY . .

RUN npm run build

# The reason the site is prerendered at all: a page with no <h1> in its static
# HTML is an empty shell to every crawler that does not run JavaScript. Fail the
# deploy rather than ship that.
RUN grep -q "<h1" dist/index.html && grep -q "<h1" dist/fa/index.html


FROM node:24-bookworm-slim

ENV NODE_ENV=production

# serve.mjs binds to loopback by default, which inside a container nothing can
# reach - the proxy in front is on the other side of the network namespace.
ENV HOST=0.0.0.0
ENV PORT=4100

WORKDIR /app

# serve.mjs resolves dist/ as ../dist from its own location, so the layout is
# kept and nothing else comes along: no node_modules, no package.json.
COPY --from=build /app/dist ./dist
COPY --from=build /app/scripts/serve.mjs ./scripts/serve.mjs

USER node

EXPOSE 4100

# node itself, because the slim image has neither curl nor wget. PORT is read
# from the environment so the check follows the server if the port is
# overridden, and it is 127.0.0.1 rather than localhost because the server
# listens on IPv4 only.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:' + process.env.PORT + '/').then((r) => process.exit(r.ok ? 0 : 1), () => process.exit(1))"]

# Exec form, so node is PID 1 and gets the SIGTERM that serve.mjs handles.
CMD ["node", "scripts/serve.mjs"]
