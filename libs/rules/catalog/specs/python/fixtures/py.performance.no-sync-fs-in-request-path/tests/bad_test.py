def handler(request):
    return open(request.args['path']).read()
