from rest_framework import serializers
from appointment.models import appointment


class AppointmentSerializer(serializers.ModelSerializer):

    class meta:
        model = appointment
        fields = 'status, date, availability'