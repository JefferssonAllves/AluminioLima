from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def teste(request):
  return Response({
    "mensagem": "API funcionando 🚀",
    "versao": "1.0.0",

    })