from django.utils.safestring import mark_safe


def preview(request):
    return mark_safe(request.GET["q"])
