FROM node:14-buster

WORKDIR /app

COPY package.json .
RUN npm i
COPY server.js .
CMD ["node","server.js"]