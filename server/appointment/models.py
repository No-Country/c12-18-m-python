from django.db import models
from services.models import Service
from user.models import User

class Appointment(models.Model):
    status = models.CharField(max_length=255, null=False)
    date = models.DateField(null=False, verbose_name="Fecha", help_text="Fecha de la cita")
    availability = models.BooleanField(null=False)

    # FKs
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # Falta crear la app appointment para poder conectar esta pk

    #from payment.models import Payment
    # payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
