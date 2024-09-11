# Use a Node.js base image
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Use an Nginx base image to serve static files
FROM nginx:alpine

# Copy the generated files from the previous step
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port on which the application will be served
EXPOSE 80

# Nginx will automatically serve the files in /usr/share/nginx/html
