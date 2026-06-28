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


def parse_altair(data):
    try:
        return data.to_dict()
    except (TypeError, ValueError, Exception) as e:
        return {"error": str(e)}


def import_fft():
    try:
        import pyfftw
        return pyfftw
    except (ImportError, Exception):
        return None
