FROM node:20-alpine
WORKDIR /app
Copy package.json and install deps
COPY package.json package-lock.json* ./
RUN npm install --production
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]

