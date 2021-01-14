FROM node:13.12.0-alpine as Builder

RUN npm install -g yarn
COPY package.json ./
COPY package-lock.json ./

RUN yarn install
COPY . ./

CMD ["yarn", "start"]

