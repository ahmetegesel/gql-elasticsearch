FROM node:12.16.3-alpine3.11

WORKDIR /usr/www/gql-api

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
