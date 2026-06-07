import requests

def fetch_data():
    requests.get("https://api.example.com/users", verify=True, timeout=10)
