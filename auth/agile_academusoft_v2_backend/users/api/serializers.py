from django.contrib.auth import get_user_model
from rest_framework import serializers

from agile_academusoft_v2_backend.users.models import Student, Teacher

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "name", "url"]

        extra_kwargs = {
            "url": {"view_name": "api:user-detail", "lookup_field": "username"}
        }


class StudentSerializer(UserSerializer):
    nuip = serializers.CharField()

    class Meta(UserSerializer.Meta):
        model = Student
        fields = UserSerializer.Meta.fields + ['nuip']


class TeacherSerialiazer(UserSerializer):
    nuip = serializers.CharField()

    class Meta(UserSerializer.Meta):
        model = Teacher
        fields = UserSerializer.Meta.fields + ['nuip']

