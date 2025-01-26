
from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ['username','email','password']
        extra_kwargs = {"password" : {"write_only":True}}     # this is for not sending password field when its send data

    def validate_email(self, value):
        if not value:
            raise serializers.ValidationError("Email is required.")
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already registered.")
        return value
    
    def validate(self, data):
        if User.objects.filter(username = data['username']).exists():
            raise serializers.ValidationError("Username already taken")
        
        return data
        
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password= validated_data['password']
        )
       
        return user