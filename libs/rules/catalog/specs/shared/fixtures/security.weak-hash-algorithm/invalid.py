import hashlib


def sign_session(payload: bytes, secret: bytes):
    return hashlib.sha1(payload + secret).hexdigest()
