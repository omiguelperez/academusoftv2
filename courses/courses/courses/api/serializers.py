from rest_framework import serializers

from courses.courses.models import (
    Course,
    CourseGroup,
    StudentEnrollment,
)


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class EnrolledCourseGroupSerializer(CourseSerializer):
    group = serializers.SerializerMethodField()

    class Meta(CourseSerializer.Meta):
        model = Course

    def get_group(self, obj):
        user = self.context['request'].user
        course_groups = StudentEnrollment.objects.select_related('course_group').filter(
            course_group__course=obj,
            student_id=user.id,
        )
        if len(course_groups) > 0:
            return course_groups[0].course_group.id
        return None


class CourseGroupScheduleSerializer(serializers.Serializer):
    id = serializers.UUIDField(source='course_group.id')
    name = serializers.CharField(source='course_group.name')
    week_day = serializers.CharField()
    start_time = serializers.IntegerField()
    end_time = serializers.IntegerField()


class FullScheduleSerializer(CourseGroupScheduleSerializer):
    course_code = serializers.CharField(source='course_group.course.code')
    course_name = serializers.CharField(source='course_group.course.name')


class EnrollmentSerializer(serializers.Serializer):
    group = serializers.PrimaryKeyRelatedField(queryset=CourseGroup.objects.all())

    def save(self, **kwargs):
        user = self.context['request'].user

        enrollment, _ = StudentEnrollment.objects.update_or_create(
            student_id=user.id,
            course_group=self.validated_data['group'],
        )
        return enrollment


class UnenrollmentSerializer(serializers.Serializer):
    group = serializers.PrimaryKeyRelatedField(queryset=CourseGroup.objects.all())

    def save(self, **kwargs):
        user = self.context['request'].user

        StudentEnrollment.objects.filter(
            student_id=user.id,
            course_group=self.validated_data['group'],
        ).delete()
