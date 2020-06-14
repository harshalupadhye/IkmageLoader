from rest_framework import serializers
from  api.models  import  CustomerLogin


class CustomerLoginSerializers(serializers.Serializer):
    Name = serializers.CharField(unique=False, max_length=20)
    Email = serializers.EmailField()
    Password = serializers.CharField(unique=False, max_length=20)
    def create(self, validate_data):
        return CustomerLogin.objects.create(**validate_data)
