import requests
import ssl


def fetch():
    requests.get("https://api.example.com/users", verify=False)
    return ssl._create_unverified_context()
