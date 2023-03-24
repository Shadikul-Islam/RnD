FROM node:16

# Create a volume for the server data
VOLUME ["/serverdata"]

# Copy the server application code to the container
COPY server.js /app/server.js

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm install express

# Specify the port on which the server runs
CMD ["node", "server.js", "--port", "3000"]
