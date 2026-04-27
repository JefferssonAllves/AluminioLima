from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
  return Response({
    "username": request.user.username,
  })

@api_view(['POST'])
def cadastrar(request):
  try:
    User.objects.create_user(
      username=request.data.get("username"),
      password=request.data.get("password")
    )
    return Response({"code": 200})
  except Exception as e:
    print(e)
    return Response({"code": 400})