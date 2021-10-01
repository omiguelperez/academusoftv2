from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from agile_academusoft_v2_backend.courses.api.views import CourseViewSet
from agile_academusoft_v2_backend.users.api.views import UserViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("courses", CourseViewSet)


app_name = "api"
urlpatterns = router.urls
