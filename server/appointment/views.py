from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from user.models import User
from services.models import Service
from .models import Appointment
from rest_framework import status
from .serializers import AppointmentSerializer


@api_view(['POST'])
def CreateAppointment(request):
    data = request.data
    user_id = data.pop('user')
    service_id = data.pop('service')
    serializer = AppointmentSerializer(data=data)
    if serializer.is_valid():
        service = Service.objects.get(id=service_id)
        timetable = data.get('timetable')
        # Verificar si ya hay dos citas para el mismo servicio y turno
        existing_appointments = Appointment.objects.filter(service=service, timetable=timetable).count()
        if existing_appointments >= 2:
            return Response({'message': 'Maximum appointments reached for this service and timetable.'}, status=status.HTTP_400_BAD_REQUEST)
        appointment = serializer.save()
        user = User.objects.get(id=user_id)
        appointment.user = user
        appointment.service = service
        appointment.save()
        return Response({'message': 'Appointment reserved successfully.'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def ListAppointments(request):
    appointments = Appointment.objects.all()
    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def UserAppointments(request):
    """Recieved the request as query parameters
        to return a list of appointments by user"""
    user_id = request.query_params.get('id')
    try:
        appointments = Appointment.objects.filter(user_id=user_id)
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=201)
    except User.DoesNotExist:
        raise ValidationError('User Does not exist')

@api_view(['GET'])
def AvailableHours(request):
    """"""
