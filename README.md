### Environment Setup

1. Install python3: 
_```sudo apt update && sudo apt install python3 python3-pip```_.

2. Install Request & Grafanalib: 
_```pip3 install requests grafanalib```_ **or** _```pip3 install --user grafanalib```_.

### Convert Grafanalib to Json

3. Convert grafanalib python code into json code: 
_```python3 system_monitoring.py```_.

4. We can use this json but for better look let's do indentation in json format. Go to
_```https://www.jsonformatter.io```_  and Paste.

5. Save the formated json file in local directory.

### Setup Dashboard in Grafana

6. Browse grafana dashboard ```http://grafana-server-ip:3000```. Import saved json file. Now we can see the dashboard.
