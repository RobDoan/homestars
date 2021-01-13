#! /bin/bash
print-wait-for-usage(){
  echo "Usage: $0 host port"
}

wait_for(){
  host=$1
  port=$2
  echo $host
  if [ -z "$host" ] || [ -z "$port" ]
  then
    print-wait-for-usage
    exit 125
  fi

  echo "waiting for ${host} ${port}"
  while ! nc -w 1 -z $host $port </dev/null
  do
    echo 'waiting.....'
    sleep 1
  done
}