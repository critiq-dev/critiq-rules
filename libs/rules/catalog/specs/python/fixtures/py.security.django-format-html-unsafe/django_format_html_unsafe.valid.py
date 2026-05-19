from django.utils.html import format_html


def render_static():
    return format_html("<p>{}</p>", "static")
