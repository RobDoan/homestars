FROM ruby:2.7.2-alpine

ARG RAILS_ENV="development"

ENV RAILS_ENV ${RAILS_ENV}
ENV BUNDLE_PATH="/gems"

RUN apk update && \
     apk add openssl tzdata postgresql-dev postgresql-client build-base && \
     gem install bundler && \
     mkdir -p /app/log

WORKDIR  /app

COPY Gemfile Gemfile.lock ./

RUN bundle install -j 4 -r 3

# Remove unnecessary files
RUN rm -rf /gems/ruby/2.7.0/cache/*.gem \
  && find /gems/ruby/2.7.0/gems/ -name "*.c" -delete \
  && find /gems/ruby/2.7.0/gems/ -name "*.o" -delete

