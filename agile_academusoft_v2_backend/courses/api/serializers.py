from rest_framework import serializers

from agile_academusoft_v2_backend.courses.models import Course, Schedule


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CourseGroupScheduleSerializer(serializers.Serializer):
    id = serializers.UUIDField(source='course_group.id')
    name = serializers.CharField(source='course_group.name')
    week_day = serializers.CharField()
    start_time = serializers.IntegerField()
    end_time = serializers.IntegerField()

