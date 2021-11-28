FROM node:14-buster

WORKDIR /srv

COPY package.json .

RUN npm i

COPY public public/
COPY server.js .

CMD ["node", "server.js"]