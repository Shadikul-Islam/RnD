FROM node:14
WORKDIR /app
RUN npm install
RUN npm init -y
RUN npm install express
RUN npm install redis
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]