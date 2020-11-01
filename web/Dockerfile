FROM node:12-alpine

EXPOSE 3000

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .