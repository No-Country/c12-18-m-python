from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import User
from .serializers import *


@api_view(['POST'])
def CreateUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def GetUsers(request):
    data = User.objects.all()
    serializer = UserSerializer(
            data, context={'request': request}, many=True)
    return Response(serializer.data)

