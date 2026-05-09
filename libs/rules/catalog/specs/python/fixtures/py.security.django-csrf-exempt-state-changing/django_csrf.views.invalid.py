from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def change_email(request):
    if request.method == "POST":
        request.user.email = request.POST["email"]
        request.user.save()
