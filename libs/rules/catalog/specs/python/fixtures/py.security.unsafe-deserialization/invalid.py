from flask import request
import pickle

payload = request.args.get("data")
config = pickle.loads(payload)
