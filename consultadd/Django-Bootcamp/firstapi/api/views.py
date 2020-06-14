from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Customer_login
# Create your views here.
class Customer_loginView(APIView):
    def get(self, request):
        
        queryset = Customer_login.objects.filter(Email=request.data.get("Email")).values().first()
        return Response(queryset)
