from rest_framework import viewsets
from rest_framework.decorators import action

from .serializers import CourseSerializer
from ..models import Course
from ..queries import list_courses_for_enrolling


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer

    def get_queryset(self):
        queryset = Course.objects.all()
        if self.action in ['enrolled', 'by_enrolling']:
            return list_courses_for_enrolling(self.request.user, action=self.action)
        return queryset

    @action(detail=False, methods=['GET'])
    def enrolled(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    @action(detail=False, methods=['GET'])
    def by_enrolling(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
