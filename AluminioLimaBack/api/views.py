from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from google.auth.transport import requests
from google.oauth2 import id_token

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
  return Response({
    "username": request.user.username,
  })

@api_view(['POST'])
def google_login(request):
  token = request.data.get("token")

  try:
      idinfo = id_token.verify_oauth2_token(
          token,
          requests.Request(),
          "498588662137-q887ccvfoaa1c3viit8eqb62t1e46bbh.apps.googleusercontent.com"
      )

      email = idinfo['email']

      user, created = User.objects.get_or_create(
          username=email,
          defaults={"email": email}
      )

      refresh = RefreshToken.for_user(user)

      return Response({
          "access": str(refresh.access_token),
          "refresh": str(refresh),
      })

  except ValueError:
      return Response({"error": "Token inválido"}, status=400)

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