def render(op, value):
    handlers = {"upper": str.upper}
    return handlers[op](value)
