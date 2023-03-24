#!/bin/bash

# create the server volume
docker volume create servervol

# create the user-defined network
docker network create my-network

# build and run the server container
docker build -t server-image .
docker run -d --name server-container --network my-network -v servervol:/serverdata -p 3000:3000 server-image