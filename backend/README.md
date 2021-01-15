# Home Stars Code challenge

- To make it to be easier for releasing I didn't not ignore `master.key` file in git repository
### Setup

1. Use Docker

- I am using Docker version **20.10.2**, and Docker Compose version 1.27.4

```bash
$ docker --version
Docker version 20.10.2, build 2291f61

$ docker-compose --version
docker-compose version 1.27.4, build 40524192
```

- create `config/master.key` file. `echo ${MASTER_KEY} > config/master.key`
- Copy environment file `cp .env.example .env`
- Modify `POSTGRES_PASSWORD` enviroment variable in `.env` file
- Build docker image `docker-compose build`
- After building the image you would have to reset the database using the following
  command. `docker-compose run --rm app sh -c  "./docker/entrypoints/wait.sh && bundle exec rake db:reset"`
- To run app `docker-compose up`. Login with credentials

```
    url: http://localhost:3000
    user_name: admin@example.com
    password: h0m3StarsChall3nger
```

### Commands

- Guard Command for watching files and running test:
    + `bundle exec guard`
    + Docker: `docker-compose run --rm app bundle exec guard`

- Run test:
    + `bundle exec rspec`
    + Docker: `docker-compose run --rm app bundle exec rspec`

- Format code
    + `bundle exec rubocop`
    + Docker: `docker-compose run --rm app bundle exec rubocop`

### Things should be improve when I have more time

- If I were to have more time, I would add a web socket service to notify and update chat messages.
- I would also implement Revoke strategy for JWT token using Redis. Ideas: when user logout, the key should be stored in `denylist`
  of redis
- Generate Swagger document
- Data Consistency: When we delete a user, we only soft delete that user. Otherwise, the system can not find created
  user and his messages. If we set `dependencies: destroy` for channels, it may cause problem: other users will lose
  chat history.
- Refactor `JoinedChannel` model. I made a mistake by naming it wrong, which caused problems in naming for the
  list of channels that user has joined.
- Write `Dockerfile` better.
- Add pagination for message list.

### TODO

- [x] As a consumer of the API, I can persist my chat messages
- [x] As a consumer of the API, I can persist messages in specific channels I join.
- [x] As a consumer of the API, I can see the list of all the available channels
- [ ] As a consumer of the API, I can receive gif suggestions
- [ ] As a consumer of the API, I can look up other users and channels
- [ ] As a consumer of the API, I can see chat statistics of users and channels
