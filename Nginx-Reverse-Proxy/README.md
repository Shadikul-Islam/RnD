# Setup Nginx-Reverse-Proxy to Access Kubernetes Cluster from Internet

1. Install Nginx: 

sudo apt update && sudo apt install nginx

vim /etc/nginx/sites-available/reverse-proxy


server {
  listen 80;

  location / {
    proxy_pass http://MINIKUBE_IP:30080; # Replace MINIKUBE_IP with your Minikube node IP
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}

minikube ip

vim /etc/nginx/sites-available/reverse-proxy

sudo ln -s /etc/nginx/sites-available/reverse-proxy /etc/nginx/sites-enabled/

sudo rm /etc/nginx/sites-enabled/default

sudo nginx -t

sudo systemctl restart nginx

http://minikube-vm-ip
