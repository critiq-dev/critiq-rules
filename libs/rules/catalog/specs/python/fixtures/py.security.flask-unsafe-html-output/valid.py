from flask import escape, request

def preview():
    return escape(request.args['html'])

