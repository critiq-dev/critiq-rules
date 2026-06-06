def render(request):
    expr = request.args.get("expr")
    return eval(expr)
