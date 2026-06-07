from jinja2 import Environment

def render(template, ctx):
    env = Environment(autoescape=True)
    return env.from_string(template).render(ctx)

