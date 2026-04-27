from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def teste(request):
  return Response({
    "mensagem": "Jeffersson Kauan Alves de Lima",
    "versao": "1.0.0",

    })