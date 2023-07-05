from django.core import serializers

class UserSerializer:
    @staticmethod
    def serialize(user):
        serialized_user = serializers.serialize('json', [user])
        return serialized_user

    @staticmethod
    def deserialize(data):
        deserialized_user = serializers.deserialize('json', data)
        user = next(deserialized_user).object
        return user


class ClientSerializer:
    @staticmethod
    def serialize(client):
        serialized_user = serializers.serialize('json', [client])
        return serialized_user

    @staticmethod
    def deserialize(data):
        deserialized_user = serializers.deserialize('json', data)
        user = next(deserialized_user).object
        return user