import pickle

payload = b"cos\nsystem\n(S'ls'\ntR."
config = pickle.loads(payload)
