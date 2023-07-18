from django.db import models
from services.models import Service
from user.models import User

TIMEBLE = (
    ("1", "08:00 to 08:30"),
    ("2", "08:30 to 09:00"),
    ("3", "09:00 to 09:30"),
    ("4", "09:30 to 10:00"),
)

class Appointment(models.Model):
    status = models.CharField(max_length=255, null=False)
    day = models.DateField(null=False, verbose_name="Day", help_text="Dia de la cita")
    timetable = models.CharField(max_length=10, choices=TIMEBLE)
    # FKs
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # Falta crear la app appointment para poder conectar esta pk

    #from payment.models import Payment
    # payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
