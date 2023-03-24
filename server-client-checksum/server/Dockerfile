# FROM node:16

# # Create a volume for the server data
# VOLUME ["/serverdata"]

# # Copy the server application code to the container
# COPY server.js /app/server.js

# # Set the working directory
# WORKDIR /app

# # Install dependencies
# RUN npm install express

# # Specify the port on which the server runs
# CMD ["node", "server.js", "--port", "3000"]

FROM node:14-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy project files
COPY . .

# expose port
EXPOSE 3000

# start server
CMD ["node", "server.js"]

