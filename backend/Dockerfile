# Use official Node.js 18 as base image
FROM node:18-buster-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the server code
COPY . .

# Expose port 3000 for the server (Assuming your app listens on port 3000)
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
