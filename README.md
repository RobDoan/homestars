### HomeStars Code challenge

- Set up [backend](./backend/README.md)
- Set up [frontend](./frontend/README.md)

### User Docker

- Build images `docker-compose build`
- Init data `docker-compose run --rm app sh -c  "./docker/entrypoints/wait.sh && bundle exec rake db:reset"`  
- To run app `docker-compose up`.
  
  Login with credentials

```
    url: http://localhost:3000
    user_name: admin@example.com
    password: h0m3StarsChall3nger
```
