#!/bin/bash

# create the client volume
docker volume create clientvol

# build and run the client container
docker build -t client-image .
docker run -it --name client-container --network my-network -v clientvol:/clientdata client-image
