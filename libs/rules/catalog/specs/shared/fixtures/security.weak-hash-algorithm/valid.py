import hashlib


def checksum(payload: bytes):
    return hashlib.md5(payload).hexdigest()
