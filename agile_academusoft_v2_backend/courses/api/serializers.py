from rest_framework import serializers

from agile_academusoft_v2_backend.courses.models import Course


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'
