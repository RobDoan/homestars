#!/bin/sh

full_path=$(realpath $0)
dir_path=$(dirname $full_path)

. "${dir_path}/wait_for.sh"

rm -rf /app/tmp/pids/server.pid

echo "waiting for Redis"
wait_for ${REDIS_HOST:-redis} ${REDIS_PORT:-6379}

echo "waiting for database"
wait_for ${POSTGRES_HOST}  ${PG_PORT:-5432}

mkdir -p tmp/pids/server.pid