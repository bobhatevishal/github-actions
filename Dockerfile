# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the rest of the app
COPY . .

# Expose port (matches app.js PORT)
EXPOSE 8080

# Start app
CMD ["node", "app.js"]

