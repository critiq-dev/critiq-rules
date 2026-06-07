from django.utils.html import escape
from flask import request

def preview():
    return escape(request.GET['q'])

