from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny
from googletrans import Translator, LANGUAGES 

class LoginAPIview(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        data = request.data
        username = data.get('username','')
        password = data.get('password', '')
        if not username or not password:
            return Response({'message':'Please provide username and password'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = authenticate(username=username, password=password)

        if user:
            if user is not None: 
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)

                return Response({
                    'message':'success',
                    'refresh': str(refresh),
                    'access': access_token,
                }, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class RegisterAPIview(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        data = request.data
        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "message" : "User created successfully",
                "data" : serializer.data
                
            },status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class TranslationAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):

        data = request.data
        text = data.get('q', '')  # Original text to translate
        target_language = data.get('target', 'en')  # Target language (default is English)

        if not text:
            return Response({"error": "Text to translate is required."}, status=status.HTTP_400_BAD_REQUEST)

        if target_language not in LANGUAGES:
            return Response({"error": "Invalid target language."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Use the synchronous version of Translator
            translator = Translator()
            translated = translator.translate(text, dest=target_language) 
            return Response({
                "translatedText": translated.text,
                "targetLanguage": target_language,
                "originalText": text,
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)