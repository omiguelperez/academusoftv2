from rest_framework import viewsets, status, mixins, generics
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import (
    CourseSerializer,
    CourseGroupScheduleSerializer,
    EnrollmentSerializer,
    UnenrollmentSerializer, EnrolledCourseGroupSerializer, FullScheduleSerializer,
)
from ..models import Schedule, StudentEnrollment
from ..queries import list_courses_for_enrolling


# /api/enrollment_ms/
class EnrollmentViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        queryset = StudentEnrollment.objects.all()
        if self.action in ['enrolled', 'by_enrolling']:
            return list_courses_for_enrolling(self.request.user, action=self.action)
        return queryset

    def get_serializer_class(self):
        serializer_class_map = {
            'list': EnrolledCourseGroupSerializer,
            'create': EnrollmentSerializer,
            'delete': UnenrollmentSerializer,
        }
        if self.action in serializer_class_map.keys():
            return serializer_class_map[self.action]
        return CourseSerializer

    def _process_enrollment(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)

    # /api/courses/enrolled/
    @action(detail=False, methods=['GET'])
    def enrolled(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    # /api/courses/by_enrolling/
    @action(detail=False, methods=['GET'])
    def by_enrolling(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    # /api/courses/enroll/
    @action(detail=False, methods=['POST'])
    def enroll(self, request, *args, **kwargs):
        return self._process_enrollment(request)

    # /api/courses/unenroll/
    @action(detail=False, methods=['POST'])
    def unenroll(self, request, *args, **kwargs):
        return self._process_enrollment(request)

    # /api/courses/groups/
    @action(detail=True, methods=['GET'])
    def groups(self, request, *args, **kwargs):
        course = self.get_object()
        schedules = Schedule.objects.filter(course_group__course=course)
        serializer = CourseGroupScheduleSerializer(
            schedules,
            many=True,
            context={'request': request}
        )
        return Response(serializer.data)


class ScheduleAPIView(APIView):

    def get(self, request, *args, **kwargs):
        queryset = Schedule.objects.all()
        enrollments = StudentEnrollment.objects.filter(student=self.request.user.student)

        queryset = queryset.filter(
            course_group__students__id__in=enrollments.values('id'),
        )
        serializer = FullScheduleSerializer(queryset, many=True)
        return Response(serializer.data)

