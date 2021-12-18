from django.conf import settings
from django.urls import path
from agile_academusoft_v2_backend.users.api.views import CustomObtainAuthToken
from rest_framework.routers import DefaultRouter, SimpleRouter

from agile_academusoft_v2_backend.courses.api.views import CourseViewSet, ScheduleAPIView
from agile_academusoft_v2_backend.users.api.views import UserViewSet
from agile_academusoft_v2_backend.users.api.views import SuperUserListView

router = SimpleRouter()

router.register("users", UserViewSet, basename="users")
router.register("courses", CourseViewSet, basename="courses")

app_name = "api"
urlpatterns = router.urls

urlpatterns += [
    path("all-users/", SuperUserListView.as_view(), name='superuserlist'),
    path("obtain-auth-token/", CustomObtainAuthToken.as_view(), name='obtain-auth-token'),
    path("schedule/", ScheduleAPIView.as_view(), name='student-schedule'),
]
