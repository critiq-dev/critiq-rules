import tempfile

def create_temp():
    with tempfile.NamedTemporaryFile() as f:
        return f.name

