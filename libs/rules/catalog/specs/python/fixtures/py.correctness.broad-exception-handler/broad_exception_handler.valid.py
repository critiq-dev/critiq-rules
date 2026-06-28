def read_count(source):
    try:
        return int(source)
    except ValueError:
        return 0


def handle_io():
    try:
        open("/tmp/data")
    except (IOError, OSError) as e:
        print(f"File error: {e}")


def handle_multiple():
    try:
        process()
    except (ValueError, TypeError, KeyError):
        pass
