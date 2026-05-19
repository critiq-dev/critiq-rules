def parse_value(payload):
    try:
        return int(payload)
    except ValueError:
        return None
