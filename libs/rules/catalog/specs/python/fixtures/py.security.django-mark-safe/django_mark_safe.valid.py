from django.utils.html import escape


def preview(request):
    return escape(request.GET["q"])
