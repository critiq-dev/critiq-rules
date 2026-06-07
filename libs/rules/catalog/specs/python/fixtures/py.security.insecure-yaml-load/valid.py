import yaml

def parse(data):
    return yaml.load(data, Loader=yaml.SafeLoader)

