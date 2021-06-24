from django.http.response import HttpResponse
from django.shortcuts import render
# from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
    return render(request,'first_app/pages/index.html')

def add_book(request):
    # request.POST => {'name': [''], 'price': [''], 'pages': [''], 'description': ['']}
    
    return HttpResponse("Hello")