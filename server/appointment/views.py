from rest_framework.decorators import api_view
from rest_framework.response import Response
from collections import Counter
from rest_framework.exceptions import ValidationError
from user.models import User
from services.models import Service
from .models import Appointment, TIMETABLE
from rest_framework import status
from .serializers import AppointmentSerializer
from collections import Counter
from user.serializers import UserSerializer
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt


@api_view(["POST"])
def CreateAppointment(request):
    data = request.data
    user_id = data.pop("user")
    service_id = data.pop("service")
    serializer = AppointmentSerializer(data=data)
    if serializer.is_valid():
        service = Service.objects.get(id=service_id)
        timetable = data.get("timetable")
        # check if the service at that time has available appointments
        existing_appointments = Appointment.objects.filter(
            service=service, timetable=timetable
        ).count()
        if existing_appointments >= 2:
            return Response(
                {
                    "message": "Maximum appointments reached for this service and timetable."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        appointment = serializer.save()
        user = User.objects.get(id=user_id)
        appointment.user = user
        appointment.service = service
        appointment.save()
        return Response(
            {"message": "Appointment reserved successfully."},
            status=status.HTTP_201_CREATED,
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def ListAppointments(request):
    appointments = Appointment.objects.all()
    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def UserAppointments(request):
    """Receieved the request as query parameters
    to return a list of appointments by user"""
    user_id = request.query_params.get("id")
    try:
        appointments = Appointment.objects.filter(user_id=user_id)
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=201)
    except User.DoesNotExist:
        raise ValidationError("User Does not exist")


@api_view(["GET"])
def AvailableHours(request):
    """"""
    hours = {
        "1": "08:00 to 08:30",
        "2": "08:30 to 09:00",
        "3": "09:00 to 09:30",
        "4": "09:30 to 10:00",
        "5": "10:00 to 10:30",
        "6": "10:30 to 11:00",
        "7": "11:00 to 11:30",
        "8": "11:30 to 12:00",
        "9": "12:00 to 12:30",
        "10": "12:30 to 01:00",
        "11": "01:00 to 01:30",
        "12": "01:30 to 02:00",
        "13": "02:00 to 02:30",
        "14": "02:30 to 03:00",
        "15": "03:00 to 03:30",
        "16": "03:30 to 04:00",
        "17": "04:00 to 04:30",
        "18": "04:30 to 05:00",
    }

    service_id = request.query_params.get("service")
    day = request.query_params.get("day")

    appointments = Appointment.objects.filter(day=day, service_id=service_id)

    timetable_values = appointments.values_list("timetable", flat=True)
    timetable_list = list(timetable_values)

    repeated_values = [
        value for value, count in Counter(timetable_list).items() if count > 1
    ]
    copy = hours.copy()
    for key in repeated_values:
        copy.pop(key, None)
    return Response(copy, status=201)


"""@api_view(["PATCH"])
def updateAppointmentStatus(request):
    user = request.user
    appointments = user.appointment_set.all()

    appointment_id = request.data.get("id")
    if not appointment_id:
        return Response({"message": "Appointment ID is required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        appointment = appointments.get(id=appointment_id)

        if appointment.status == "Confirmed":
            serializer = AppointmentSerializer(
                appointment, data=request.data, partial=True, context={"request": request}
            )
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response(
                {"message": "Only appointments in 'Confirmed' state can be modified or cancelled."},
                status=status.HTTP_400_BAD_REQUEST,
            )

    except Appointment.DoesNotExist:
        return Response(
            {"message": "Appointment does not exist."},
            status=status.HTTP_404_NOT_FOUND,
        )
"""

@api_view(["PATCH"])
def UpdateUserAppointment(request):
    user_id = request.data.get("user_id") # Obtener el ID del usuario autenticado
    appointment_id = request.data.get("appoinment_id")
    status = request.data.get("status")

    try:
        appointment = Appointment.objects.get(id=appointment_id, user_id=user_id)
        print(appointment)
        appointment.status = status
        appointment.save()
        return Response({"message": f"Appointment for {appointment.service} service was successfully {status}"}, status=200)
    except Appointment.DoesNotExist:
        return Response(
            {
                "message": "Appointment does not exist or does not belong to the authenticated user"
            },
            status=400,
        )
