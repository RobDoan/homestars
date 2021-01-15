FROM node:12.20.0-alpine3.12 as appBuilder

RUN mkdir -p /app
COPY yarn.lock package.json /app/

RUN yarn install --cwd /app
WORKDIR /app

COPY . .
RUN yarn build
CMD ["yarn", "start"]


FROM nginx:stable-alpine

COPY --from=appBuilder /app/build/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
