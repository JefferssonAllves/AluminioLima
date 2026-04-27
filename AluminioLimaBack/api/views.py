from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Usuario
@api_view(['GET'])
def teste(request):
  return Response({
    "mensagem": "Jeffersson Kauan Alves de Lima",
    "versao": "1.0.0",

    })


@api_view(['POST'])
def cadastrar(request):
  usuario = request.data.get("usuario")
  senha = request.data.get("senha")

  user = Usuario.objects.create(
    usuario=usuario,
    senha=senha
  )

  try:
    user.save()
    return Response({"code": 200})
  except Exception as e:
    print(e)
    return Response({"code": 400})