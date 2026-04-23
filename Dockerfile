FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
RUN npm ci --omit=dev

EXPOSE 3000
CMD ["sh", "-c", "npx wrangler dev --config dist/server/wrangler.json --ip 0.0.0.0 --port 3000 --no-live-reload --var RESEND_API_KEY:$RESEND_API_KEY"]
