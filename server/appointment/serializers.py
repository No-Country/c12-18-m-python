from rest_framework import serializers
from appointment.models import Appointment
from services.serializers import ServiceSerializer
from user.serializers import UserSerializer


class AppointmentSerializer(serializers.ModelSerializer):

    service = ServiceSerializer()
    user = UserSerializer()

    class Meta:
        model = Appointment
        fields = '__all__'