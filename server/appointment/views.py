from rest_framework.decorators import api_view
from rest_framework.response import Response
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
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






@api_view(['GET'])
def ListAppointments(request):
    appointments = Appointment.objects.all()
    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def CheckAvailability(request):
    date = request.data.get('date')
    appointments = Appointment.objects.filter(date=date)
    available = not appointments.exists()
    return Response({'available': available}, status=status.HTTP_200_OK)

@api_view(['GET'])
def ListAvailableSlots(request, date):
    appointments = Appointment.objects.filter(date=date, availability=True)
    slots = [str(appointment.time) for appointment in appointments]
    return Response({'slots': slots}, status=status.HTTP_200_OK)

@api_view(['POST'])
def ReserveSlot(request):
    date = request.data.get('date')
    time = request.data.get('time')
    appointment = Appointment.objects.get(date=date, time=time, availability=True)
    appointment.availability = False
    appointment.user = request.user
    appointment.save()
    return Response({'message': 'Appointment reserved successfully.'}, status=status.HTTP_200_OK)
