from django.db import models
from services.models import Service
from user.models import User

TIMETABLE = (
    ("1", "08:00 to 08:30"),
    ("2", "08:30 to 09:00"),
    ("3", "09:00 to 09:30"),
    ("4", "09:30 to 10:00"),
    ("5", "10:00 to 10:30"),
    ("6", "10:30 to 11:00"),
    ("7", "11:00 to 11:30"),
    ("8", "11:30 to 12:00"),
    ("9", "12:00 to 12:30"),
    ("10", "12:30 to 13:00"),
    ("11", "13:00 to 13:30"),
    ("12", "13:30 to 14:00"),
    ("13", "14:00 to 14:30"),
    ("14", "14:30 to 15:00"),
    ("15", "15:00 to 15:30"),
    ("16", "15:30 to 16:00"),
    ("17", "16:00 to 16:30"),
    ("18", "16:30 to 17:00"),
    ("19", "17:00 to 17:30"),
    ("20", "17:30 to 18:00"),
)


class Appointment(models.Model):
    status = models.CharField(max_length=255, null=False)
    day = models.DateField(null=False, verbose_name="Day", help_text="Dia de la cita")
    timetable = models.CharField(max_length=10, choices=TIMETABLE)
    # FKs
    service = models.ForeignKey(Service, null=True, blank=True, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=True, blank=True,  on_delete=models.CASCADE)

    @property
    def timetable_display(self):
        return dict(TIMETABLE).get(self.timetable)
    # Falta crear la app appointment para poder conectar esta pk

    #from payment.models import Payment
    # payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
