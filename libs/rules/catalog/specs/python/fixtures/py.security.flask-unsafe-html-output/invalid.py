from flask import Markup, request

def preview():
    return Markup(request.args['html'])

