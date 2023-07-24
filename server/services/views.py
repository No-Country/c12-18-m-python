from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from rest_framework import status
from .models import Service
from .serializers import ServiceSerializer


@api_view(["POST"])
def CreateService(request):
    serializer = ServiceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()  # save the data into a object
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(["GET"])
def GetService(request):
    data = Service.objects.all()
    serializer = ServiceSerializer(data, context={"request": request}, many=True)
    return Response(serializer.data)

@api_view(["DELETE"])
def DeleteService(request):
    try:
        service_id = request.query_params.get('id')
        service = Service.objects.get(id=service_id)
    except Service.DoesNotExist:
        return Response({"error": "Servicio no encontrado."}, status=status.HTTP_404_NOT_FOUND)
    service.delete()
    return Response({"message": "Servicio eliminado exitosamente."}, status=status.HTTP_204_NO_CONTENT)