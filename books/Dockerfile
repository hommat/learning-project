FROM node:12-alpine AS base

EXPOSE 3000

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

FROM base AS development

CMD ["npm", "run", "dev"]

FROM base AS test

CMD ["npm", "run", "test"]