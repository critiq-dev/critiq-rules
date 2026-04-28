import hashlib


def checksum(payload: bytes):
    return hashlib.sha256(payload).hexdigest()
