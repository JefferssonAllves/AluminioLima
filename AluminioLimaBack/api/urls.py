from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
  path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('me/', views.me),
  path('cadastrar/', views.cadastrar),
  path('google-login/', views.google_login),
]
