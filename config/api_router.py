from django.conf import settings
from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.routers import DefaultRouter, SimpleRouter

from agile_academusoft_v2_backend.courses.api.views import CourseViewSet, ScheduleAPIView
from agile_academusoft_v2_backend.users.api.views import UserViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet, basename="users")
router.register("courses", CourseViewSet, basename="courses")

app_name = "api"
urlpatterns = router.urls

urlpatterns += [
    path("obtain-auth-token/", ObtainAuthToken.as_view(), name='obtain-auth-token'),
    path("schedule/", ScheduleAPIView.as_view(), name='student-schedule'),
]
