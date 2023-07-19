from rest_framework.decorators import api_view
from rest_framework.response import Response
from collections import Counter
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
        appointment = serializer.save()
        user = User.objects.get(id=user_id)
        appointment.user = user
        service = Service.objects.get(id=service_id)
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
    hours = {
        "1": "08:00 to 08:30", "2": "08:30 to 09:00", "3": "09:00 to 09:30", "4": "09:30 to 10:00",
        "5": "10:00 to 10:30", "6": "10:30 to 11:00", "7": "11:00 to 11:30", "8": "11:30 to 12:00",
        "9": "12:00 to 12:30", "10": "12:30 to 01:00", "11": "01:00 to 01:30", "12": "01:30 to 02:00",
        "13": "02:00 to 02:30", "14": "02:30 to 03:00", "15": "03:00 to 03:30", "16": "03:30 to 04:00",
        "17": "04:00 to 04:30", "18": "04:30 to 05:00"
    }

    service_id = request.query_params.get('service')
    day = request.query_params.get('day')

    appointments = Appointment.objects.filter(day=day, service_id=service_id)

    timetable_values = appointments.values_list('timetable', flat=True)
    timetable_list = list(timetable_values)

    repeated_values = [value for value, count in Counter(timetable_list).items() if count > 1]
    copy = hours.copy()
    for key in repeated_values:
        copy.pop(key, None)
    return Response(copy, status=201)
