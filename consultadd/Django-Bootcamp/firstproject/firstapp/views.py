from django.shortcuts import render
from django.http import HttpResponse
from firstproject import urls

# Create your views here.
def index(request):
    return render(request,"first_app/home.html")
    
