FROM node:14-buster

WORKDIR /srv

COPY package.json .

RUN npm i

COPY . .

ARG DEFAULT_PORT=80
ENV PORT $DEFAULT_PORT
EXPOSE $PORT

CMD ["npm","start"]