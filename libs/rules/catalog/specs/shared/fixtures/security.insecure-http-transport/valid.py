import requests


def fetch():
    return requests.get("http://localhost:5000/health")
