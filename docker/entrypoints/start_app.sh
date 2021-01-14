#!/bin/sh

full_path=$(realpath $0)
dir_path=$(dirname $full_path)

. "${dir_path}/wait_for.sh"

mkdir -p /app/tmp/pids/
rm -rf /app/tmp/pids/server.pid

echo "waiting for Redis"
wait_for ${REDIS_HOST:-redis} ${REDIS_PORT:-6379}

echo "waiting for database"
wait_for ${POSTGRES_HOST}  ${PG_PORT:-5432}

#  Start application
startApp(){
  bundle exec puma -C ./config/puma.rb -e ${RAILS_ENV}
}

# Start debugger
startDebugger(){
  bundle exec rdebug-ide --debug --host 0.0.0.0 --port 1234 --dispatcher-port 26162-- bin/rails server -p 8080 -b 0.0.0.0
}

printHelper(){
    echo "Usage: $0 {app|debugger}"
}

case $1 in
  app)
      echo "Starting Rails application ${RAILS_ENV}"
      startApp
    ;;
  debugger)
      echo "Starting Rails application with Debugger ${RAILS_ENV}"
      startDebugger
    ;;
  *)
    printHelper
    ;;
esac

