from django.urls import path, re_path
from .views import *


urlpatterns = [
    path("createservice/", CreateService),
    path("getservice/", GetService),
    path("delete/", DeleteService)
]
