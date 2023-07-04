from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import *

# Create your views here.


@api_view(['POST', 'GET'])
def create_client(request):
    if request.method == 'GET':
        data = Client.query.all()
        serializer = ClientSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # save the data into a object
            return Response(serializer.data, status=201)

    return Response(serializer.errors, status=400)
