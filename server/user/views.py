from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from rest_framework import status

from .models import User
from .serializers import *


@api_view(['POST'])
def CreateUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()  # Utilizar el método save() del serializador para crear el usuario
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET'])
def GetUsers(request):
    data = User.objects.all()
    serializer = UserSerializer(
            data, context={'request': request}, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def Auth(request):
    username = request.query_params.get('username')
    password = request.query_params.get('password')
    try:
        user = User.objects.get(username=username)
        if user.check_password(password):
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else:
            raise ValidationError('Contraseña incorrecta')
    except User.DoesNotExist:
        raise ValidationError('El usuario no existe')
