# Home Stars Code challenger

### Setup

1. Use Docker

- I am using Docker version **20.10.2**, and Docker Compose version 1.27.4

```bash
$ docker --version
Docker version 20.10.2, build 2291f61

$ docker-compose --version
docker-compose version 1.27.4, build 40524192
```

- Copy environment file `cp .env.example .env`
- Modify `POSTGRES_PASSWORD` enviroment variable in `.env` file
- Build docker image `docker-compose build`
- After building the image you would have to reset the database using the following command. `docker-compose run --rm app sh -c  "./docker/entrypoints/wait.sh && bundle exec rake db:reset"`
- To run app `docker-compose up`.
Login with credentials
```
    url: http://localhost:3000
    user_name: admin@example.com
    password: h0m3StarsChall3nger
```

### Commands

- Guard Command for watching files and running test:
    + `bundle exec guard`
    +  Docker: `docker-compose run --rm auth-api bundle exec guard`

- Run test:
    + `bundle exec rspec`
    + Docker: `docker-compose run --rm auth-api bundle exec rspec`

- Format code
    + `bundle exec rubocop`
    + Docker: `docker-compose run --rm auth-api bundle exec rubocop`

### Things should be improve when I have more time

- **DRY**:
    - `check_authorization` method
- Implement Revoke strategy for JWT token using Redis. Ideas: when user logout, the key should be stored in `denylist` of redis
- Generate Swagger document
- Data Consistency. When we delete a user, we only soft delete that user.
Otherwise, the system can not find created user, and his messages.
If we set `dependencies: destroy` for channels, it may cause problem: other users will lost chat history.
- Move `PunditUser` to a class rather than user Struct inside Controller, it's hard and seems not correct to put there
- Refactor `JoinedChannel` model. I did a mistake when naming it a little bit wrong, which causes problem in naming
for list of channels that user has joined
- Write `Dockerfile` better.

### TODO
- [x] 1. As a consumer of the API, I can persist my chat messages
- [x] 2. As a consumer of the API, I can persist messages in specific channels I join.
- [x] 3. As a consumer of the API, I can see the list of all the available channels
- [ ] 4. As a consumer of the API, I can receive gif suggestions
- [ ] 5. As a consumer of the API, I can look up other users and channels
- [ ] 6. As a consumer of the API, I can see chat statistics of users and channels