from django.urls import path, include
from .views import main
import re

urlpatterns = [
    path('', main, {'resource': ''}),
    path('<path:resource>/', main)
]
