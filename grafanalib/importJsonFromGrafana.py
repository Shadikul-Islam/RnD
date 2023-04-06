import requests
import json

# Change here with your Grafana API key, URL, and dashboard ID
API_KEY = "eyJrIjoiSWV5bncxb0tuc1VZRDRrZG1acENZeDNMWVFPUXdmMXciLCJuIjoiZ3JhZmFuYV9hcGlfa2V5IiwiaWQiOjF9"
GRAFANA_URL = "http://13.212.231.235:3000"
DASHBOARD_ID = "05" #http://13.212.231.235:3000/d/05/Name?orgId=1


headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

response = requests.get(
    f"{GRAFANA_URL}/api/dashboards/uid/{DASHBOARD_ID}", headers=headers
)
dashboard_data = response.json()

dashboard_json_data = dashboard_data["dashboard"]

# Change here to Save the dashboard JSON to a name.json file
with open("cAdvisor.json", "w") as file:
    json.dump(dashboard_json_data, file)

# To run this script: python3 importJsonFromGrafana.py