from rest_framework import serializers
from appointment.models import Appointment
from services.serializers import ServiceSerializer
from user.serializers import UserSerializer


class AppointmentSerializer(serializers.ModelSerializer):
    service = ServiceSerializer(required=False)
    user = UserSerializer(required=False)
    time = serializers.CharField(source="get_timetable_display", read_only=True)

    class Meta:
        model = Appointment
        fields = "__all__"
