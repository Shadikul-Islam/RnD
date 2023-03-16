FROM node:14
WORKDIR /app
RUN npm install
RUN npm init -y
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]