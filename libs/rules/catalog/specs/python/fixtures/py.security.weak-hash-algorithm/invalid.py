import hashlib

def sign_session(payload: bytes, secret: bytes):
    digest = hashlib.sha1(payload + secret).hexdigest()
    return digest
