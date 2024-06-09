from django.shortcuts import render

# Create your views here.

def main(request, resource):
    return render(request, 'frontend/index.html')