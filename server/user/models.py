from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password
from django.db import models


class User(AbstractUser):
    admin = models.BooleanField(default=False, null=True, blank=True)
    password = models.CharField(max_length=128)  # Cambio del campo a CharField

    def set_password(self, raw_password):
        self.password = make_password(
            raw_password
        )  # Encriptar la contraseña al asignarla

    def check_password(self, raw_password):
        return check_password(
            raw_password, self.password
        )  # Verificar la contraseña encriptada
