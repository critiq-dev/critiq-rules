from django.utils.html import format_html, escape
from flask import request

def greet():
    name = escape(request.GET.get('name', 'guest'))
    return format_html('<div>{}</div>', name)

