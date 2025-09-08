# --- Build stage (not building assets, but keeps pattern ready)
FROM node:20-alpine AS base
WORKDIR /app

# Install only prod deps
COPY package.json ./
RUN npm install --omit=dev

# --- Runtime image
FROM node:20-alpine
ENV NODE_ENV=production \
    PORT=8080
WORKDIR /app

# Copy node_modules from base layer and app source
COPY . .

EXPOSE 8080
USER node
CMD ["node", "app.js"]

