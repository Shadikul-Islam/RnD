import os
import requests
import hashlib

server_url = f"http://{os.environ['SERVER_HOST']}"

def main():
    # Download the file from the server
    response = requests.get(server_url)
    if response.status_code != 200:
        print(f"Failed to download file from server: {response.status_code}")
