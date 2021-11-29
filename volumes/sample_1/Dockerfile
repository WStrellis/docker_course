FROM node:14-buster

WORKDIR /srv

COPY package.json .

RUN npm i

COPY . .

VOLUME [ "/srv/feedback" ]
VOLUME [ "/srv/temp" ]

CMD ["npm","start"]