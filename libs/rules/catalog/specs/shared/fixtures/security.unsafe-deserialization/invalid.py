import pickle


def load_payload():
    payload = request.data
    return pickle.loads(payload)
