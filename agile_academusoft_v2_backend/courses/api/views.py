from rest_framework import viewsets

from .serializers import CourseSerializer
from agile_academusoft_v2_backend.courses.models import Course


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
