FROM node:12.20.0-alpine3.12

RUN mkdir -p /app
COPY yarn.lock package.json /app/

RUN yarn install --cwd /app
WORKDIR /app

COPY . .

CMD ["yarn", "start"]

