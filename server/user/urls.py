from django.urls import path, re_path
from .views import *


urlpatterns = [
    path('createuser/', CreateUser),
    path('getusers/', GetUsers),
    path('auth/', Auth),
]
