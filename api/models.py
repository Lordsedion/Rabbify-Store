from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
import string
import random as rnd

def user_directory_path(instance, fileName):
    username = slugify(instance.creator)
    return f"images/{username}/{fileName}"

def generate_code():

    while True:
        code = ''.join(rnd.choices(string.digits+string.ascii_letters, k=15))
        if Product.objects.filter(product_no=code).count() == 0:
            break
    return code


class Category(models.Model):
    name = models.CharField(max_length=35)
    
    def __str__(self) -> str:
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100, default="Default Item")
    product_no = models.CharField(max_length=30, default=generate_code)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price_old = models.FloatField()
    price = models.FloatField()
    available_qty = models.IntegerField()
    product_desc = models.CharField(max_length=5000, default="Product Description")
    instant_delivery = models.BooleanField(default=False)
    guarantee = models.IntegerField()

    def __str__(self) -> str:
        return self.name
   


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    creator = models.CharField(max_length=35)
    image = models.ImageField(upload_to=user_directory_path)
    

    def __str__(self) -> str:
        return str(self.product)
