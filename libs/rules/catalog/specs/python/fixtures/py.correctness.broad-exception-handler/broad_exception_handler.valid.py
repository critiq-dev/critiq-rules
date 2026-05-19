def read_count(source):
    try:
        return int(source)
    except ValueError:
        return 0
