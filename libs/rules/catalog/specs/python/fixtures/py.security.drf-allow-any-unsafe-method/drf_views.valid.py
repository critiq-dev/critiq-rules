from rest_framework.decorators import api_view, permission_classes


@api_view(["GET"])
@permission_classes([AllowAny])
def health(request):
    return {}
