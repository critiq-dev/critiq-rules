def parse_value(payload):
    try:
        return int(payload)
    except:
        return None
