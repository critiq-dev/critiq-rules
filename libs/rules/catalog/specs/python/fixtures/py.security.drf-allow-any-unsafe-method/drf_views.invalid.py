from rest_framework.decorators import api_view, permission_classes


@api_view(["POST"])
@permission_classes([AllowAny])
def create_widget(request):
    return {}
