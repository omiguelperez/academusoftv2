from rest_framework import viewsets

from .serializers import CourseSerializer
from ..models import Course


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
