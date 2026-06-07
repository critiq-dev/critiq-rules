from django.utils.html import format_html
from flask import request

def greet():
    name = request.GET.get('name', 'guest')
    return format_html('<div>{}</div>', name)

