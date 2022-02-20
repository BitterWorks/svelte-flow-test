#!/bin/bash

# exit 1 -> exit with error
# exit 0 -> exit and execute commit

echo 'Running pre-commit hook'

container=$(grep container_name docker-compose.yml)

container_name=$(echo "${container##* }")

echo "$( docker container inspect -f '{{.State.Running}}' ${container_name} )"

if [ "$( docker container inspect -f '{{.State.Running}}' $container_name )" == true ]; 
then echo 'running' ; 
else \
    echo 'not ruinning' 
    echo '***** Container not running *****' && \
    echo '***** Executing docker-compose *****' && \
    (docker-compose up --build -d) || echo '***** Error while building container *****' && exit 1 \
    echo '*****Container up *****';
fi;

echo 'paso'

(docker exec $container_name npm run validate) || { echo '***** Commit failed (npm run validate failed) *****'; exit 1; }

(docker exec $container_name npm run test) || { echo '***** Commit failed (npm run test failed) *****'; exit 1; }


echo '***** Tests OK, commiting *****'
exit 0