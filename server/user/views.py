from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *

@csrf_exempt
def create_client(request):
    if request.method == 'GET':
        clients = Client.objects.all()
        client_dict = [model_to_dict(client) for client in clients]
        return JsonResponse(client_dict, safe=False)

    elif request.method == 'POST':
        user_data = request.POST
        user = ClientSerializer.deserialize(user_data)
        user.save()
        serialized_user = ClientSerializer.serialize(user)
        return JsonResponse(serialized_user, status=201, safe=False)
