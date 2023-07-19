from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('create/', CreateAppointment),
    path('list/', ListAppointments),
    path('user/', UserAppointments),
    path('hours/', AvailableHours),
]