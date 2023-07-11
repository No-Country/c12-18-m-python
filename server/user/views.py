from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
import json
from .models import *
from .serializers import *


@csrf_exempt
def create_client(request):

    if request.method == 'GET':
        clients = Client.query.all()
        client_dict = [model_to_dict(client) for client in clients]
        return JsonResponse(client_dict, safe=False)

    elif request.method == 'POST':

        content_type = request.headers.get('Content-Type')
        if content_type == 'application/json':
            try:
                client_data = json.loads(request.body)
            except json.JSONDecodeError:
                return JsonResponse({'error': 'Invalid JSON payload'}, status=400)
        elif content_type == 'application/x-www-form-urlencoded':
            client_data = request.POST.dict()
        else:
            return JsonResponse({'error': 'Unsupported content type'}, status=415)

        required_fields = ['username', 'password', 'email']
        missing_fields = [field for field in required_fields if field not in client_data]
        if missing_fields:
            return JsonResponse({'error': f'Missing fields: {", ".join(missing_fields)}'}, status=400)

        # Crear el cliente
        client = Client.objects.create_user(**client_data)
        client.save()
        # Devolver la respuesta
        client_dict = model_to_dict(client)
        return JsonResponse(client_dict, status=201)
