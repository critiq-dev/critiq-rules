class Config:
    def from_object(self, obj):
        exec(compile(open(obj).read(), "<string>", "exec"))


def render(op, value):
    handlers = {"upper": str.upper}
    return handlers[op](value)
