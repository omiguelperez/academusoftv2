from django.conf import settings
from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.routers import DefaultRouter, SimpleRouter

from courses.courses.api.views import CourseViewSet, ScheduleAPIView

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("courses", CourseViewSet, basename="courses")

app_name = "api"
urlpatterns = router.urls

urlpatterns += [
    path("obtain-auth-token/", ObtainAuthToken.as_view(), name='obtain-auth-token'),
    path("schedule/", ScheduleAPIView.as_view(), name='student-schedule'),
]
