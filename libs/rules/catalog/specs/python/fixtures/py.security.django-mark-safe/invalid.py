from django.utils.safestring import mark_safe
from flask import request

def preview():
    return mark_safe(request.GET['q'])

