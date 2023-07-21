from django.db import models
from services.models import Service
from user.models import User

TIMETABLE = (
    ("1", "08:00 a.m. - 08:30 a.m."),
    ("2", "08:30 a.m. - 09:00 a.m."),
    ("3", "09:00 a.m. - 09:30 a.m."),
    ("4", "09:30 a.m. - 10:00 a.m."),
    ("5", "10:00 a.m. - 10:30 a.m."),
    ("6", "10:30 a.m. - 11:00 a.m."),
    ("7", "11:00 a.m. - 11:30 a.m."),
    ("8", "11:30 a.m. - 12:00 p.m."),
    ("9", "12:00 p.m. - 12:30 p.m."),
    ("10", "12:30 p.m. - 01:00 p.m."),
    ("11", "01:00 p.m. - 01:30 p.m."),
    ("12", "01:30 p.m. - 02:00 p.m."),
    ("13", "02:00 p.m. - 02:30 p.m."),
    ("14", "02:30 p.m. - 03:00 p.m."),
    ("15", "03:00 p.m. - 03:30 p.m."),
    ("16", "03:30 p.m. - 04:00 p.m."),
    ("17", "04:00 p.m. - 04:30 p.m."),
    ("18", "04:30 p.m. - 05:00 p.m."),
)


class Appointment(models.Model):
    status = models.CharField(max_length=255, null=False)
    day = models.DateField(null=False, verbose_name="Day", help_text="Dia de la cita")
    timetable = models.CharField(max_length=10, choices=TIMETABLE)
    # FKs
    service = models.ForeignKey(
        Service, null=True, blank=True, on_delete=models.CASCADE
    )
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)

    @property
    def timetable_display(self):
        return dict(TIMETABLE).get(self.timetable)

    # Falta crear la app appointment para poder conectar esta pk

    # from payment.models import Payment
    # payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
