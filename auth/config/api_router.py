from django.conf import settings
from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.routers import DefaultRouter, SimpleRouter

from auth.users.api.views import UserViewSet

from auth.users.api.views import SuperUserListView

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet, basename="users")

app_name = "api"
urlpatterns = router.urls

urlpatterns += [
    path("all-users/", SuperUserListView.as_view(), name='superuserlist'),
    path("obtain-auth-token/", ObtainAuthToken.as_view(), name='obtain-auth-token'),
]
