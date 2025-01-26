from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('login/', views.LoginAPIview.as_view()),
    path('register/', views.RegisterAPIview.as_view()),
    path('translation/', views.TranslationAPIView.as_view())
]
