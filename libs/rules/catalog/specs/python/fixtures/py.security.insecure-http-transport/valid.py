import requests

def fetch_data():
    requests.get("https://api.example.com/users", timeout=10)
