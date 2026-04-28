import requests
import ssl


def fetch():
    context = ssl.create_default_context()
    return requests.get("https://api.example.com/users", timeout=5), context
