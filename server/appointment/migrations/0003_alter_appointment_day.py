# Generated by Django 4.2.3 on 2023-07-17 21:32

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("appointment", "0002_remove_appointment_availability_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="appointment",
            name="day",
            field=models.DateField(help_text="Dia de la cita", verbose_name="Day"),
        ),
    ]