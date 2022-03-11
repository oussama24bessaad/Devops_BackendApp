FROM node:lts-alpine3.15

WORKDIR /server

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","server.js"]
