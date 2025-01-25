# Use a Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the backend port
EXPOSE 3001

# Run the compiled JavaScript
CMD ["node", "dist/server.js"]
