def read_count(source):
    try:
        return int(source)
    except Exception:
        return 0


def load_config(raw):
    try:
        return raw.strip()
    except BaseException as error:
        raise RuntimeError("failed") from error
