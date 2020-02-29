FROM node:10.16

WORKDIR /usr/www/react-ui

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4001

CMD ["npm", "start"]
