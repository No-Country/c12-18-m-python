# Generated by Django 4.2.3 on 2023-07-18 22:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("appointment", "0005_alter_appointment_timetable"),
    ]

    operations = [
        migrations.AlterField(
            model_name="appointment",
            name="timetable",
            field=models.CharField(
                choices=[
                    ("1", "08:00 to 08:30"),
                    ("2", "08:30 to 09:00"),
                    ("3", "09:00 to 09:30"),
                    ("4", "09:30 to 10:00"),
                ],
                max_length=10,
            ),
        ),
    ]
