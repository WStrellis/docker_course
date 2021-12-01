FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG MONGO=host.docker.internal
ENV MONGO_HOST $MONGO

CMD ["node", "app.js"]