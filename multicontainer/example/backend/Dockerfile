FROM node:14-buster

WORKDIR /srv
COPY package.json .
RUN npm i

COPY . .

EXPOSE 7755

CMD ["node","app.js"]