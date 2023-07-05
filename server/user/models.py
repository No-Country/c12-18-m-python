from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

# Create your models here.


class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = 'ADMIN', 'Admin'
        CLIENT = 'CLIENT', 'Client'
        EMPLOYEE = 'EMPLOYEE', 'Employee'

    base_role = Role.ADMIN
    role = models.CharField(max_length=50, choices=Role.choices)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.role = self.base_role
            return super().save(*args, **kwargs)

class ClientManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        results = super().get_queryset(*args, **kwargs)
        return results.filter(role=User.Role.CLIENT)

class Client(User):

    base_role = User.Role.CLIENT
    query = ClientManager()

    class Meta:
        proxy = True


class ClientManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        results = super().get_queryset(*args, **kwargs)
        return results.filter(role=User.Role.EMPLOYEE)

class Employee(User):

    base_role = User.Role.EMPLOYEE

    class Meta:
        proxy = True

