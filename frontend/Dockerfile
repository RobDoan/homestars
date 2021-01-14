FROM node:13.12.0-alpine

RUN npm install -g yarn && \
    mkidr -p /app

COPY package.json /app
COPY package-lock.json /app

WORKDIR /app

RUN yarn install
COPY . .

CMD ["yarn", "start"]

