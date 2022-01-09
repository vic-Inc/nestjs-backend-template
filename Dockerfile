FROM node:14-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf
RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main"]