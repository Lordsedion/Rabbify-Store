from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("", main),
    path("script", script),
    path("keylogger", keylogger),
    path("signup", RegisterView.as_view(), name="register"),
    path('login', UserLoginView.as_view(), name='login'),
    path('products/', RetrieveProductView.as_view(), name='products'),
    path('view-product/', RetrieveProduct.as_view(), name='product-view'),
    path('images/<int:product_id>/', ProductImageView.as_view(), name='image'),
]