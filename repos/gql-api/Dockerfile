FROM node:10.16

WORKDIR /usr/www/gql-api

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
