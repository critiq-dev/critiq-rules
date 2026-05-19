from django.utils.html import format_html


def greet(request):
    name = request.GET["name"]
    return format_html("<p>{}</p>", name)
