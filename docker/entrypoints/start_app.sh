#!/bin/bash

set -e

full_path=$(realpath $0)
dir_path=$(dirname $full_path)

. "${dir_path}/wait_for.sh"

rm -rf /app/tmp/pids/server.pid

echo "waiting for Redis"
wait_for ${REDIS_URL} ${REDIS_PORT}

echo "waiting for database"
wait_for ${PG_HOST}  ${PG_PORT}

#  Start application
start-app(){
  bundle exec puma -C ${applicationDir}/config/puma.rb -e ${RAILS_ENV}
}

# Start debugger
start-debugger(){
  bundle exec rdebug-ide --debug --host 0.0.0.0 --port 1234 --dispatcher-port 26162-- bin/rails server -p 8080 -b 0.0.0.0
}

print-helper(){
    echo "Usage: $0 {app|debugger}"
}

case $1 in
  app)
      echo "Starting Rails application ${RAILS_ENV}"
      start-app
    ;;
  debugger)
      echo "Starting Rails application with Debugger ${RAILS_ENV}"
      start-debugger
    ;;
  *)
    print-helper
    ;;
esac

