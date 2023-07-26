from rest_framework import serializers
from user.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True
    )  # Configurar el campo como solo escritura

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "password",
            "email",
            "first_name",
            "last_name",
            "admin",
        )

    def create(self, validated_data):
        password = validated_data.pop(
            "password"
        )  # Obtener la contraseña del diccionario validado
        user = User.objects.create(
            **validated_data
        )  # Crear el usuario con los datos validados
        user.set_password(password)  # Establecer la contraseña encriptada
        user.save()
        return user
