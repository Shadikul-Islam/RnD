### Documentation of Step by Step Process for this Project

1. Created two folder named Client and Server
2. I have used Express.js for running server application and Python Flask for running client application.
3. Prepared Dockerfile for server and client application with necessery package installation process.
4. Prepared two script file named fileserver.sh and fileclient.sh to run our dockerized project. Within this file I defined to create docker volume, Build docker image and Run docker container in specific port.
5. After running successfully both container the client application will create a random.txt file which we can see in the browser http://ipaddress:3000 and server application will copy that file and calculate the checksum and show the output as per the calculation. We can see the server application output in the browser http://ipaddress:5000

### Command to Run this Project
1. git clone URLofThisProject
2. cd ProjectDir
3. chmod +x server/fileserver.sh client/fileclient.sh
4. cd server/
5. ./fileserver.sh
6. cd.. && cd client/
7. ./fileclient.sh
8. docker ps
