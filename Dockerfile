# FROM ubuntu:20.04
# CMD [ "tail", "-f", "/dev/null" ]
# RUN apt-get update
# RUN apt-get install nginx -y
# RUN apt-get install curl -y
# RUN apt-get install nano -y
# RUN apt-get install vim -y
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# RUN service nginx start
# RUN useradd -ms /bin/bash nginx

FROM golang:1.18

COPY . /work
WORKDIR /work
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o prometheus-nginxlog-exporter

FROM scratch

COPY --from=0 /work/prometheus-nginxlog-exporter /prometheus-nginxlog-exporter

EXPOSE 4040
ENTRYPOINT ["/prometheus-nginxlog-exporter"]