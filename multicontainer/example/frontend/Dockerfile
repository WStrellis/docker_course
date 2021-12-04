FROM node:14-buster

WORKDIR /srv
COPY package.json .
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]