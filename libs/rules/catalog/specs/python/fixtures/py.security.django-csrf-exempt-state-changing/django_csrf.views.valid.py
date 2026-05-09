from django.views.decorators.csrf import csrf_protect


@csrf_protect
def change_email(request):
    if request.method == "POST":
        request.user.email = request.POST["email"]
        request.user.save()
