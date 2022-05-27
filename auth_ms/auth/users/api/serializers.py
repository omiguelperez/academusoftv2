from django.contrib.auth import get_user_model
from rest_framework import serializers

from auth.users.models import Student, Teacher

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "name"]


class StudentSerializer(UserSerializer):
    nuip = serializers.CharField()

    class Meta(UserSerializer.Meta):
        model = Student
        fields = UserSerializer.Meta.fields + ['nuip']


class TeacherSerializer(UserSerializer):
    nuip = serializers.CharField()

    class Meta(UserSerializer.Meta):
        model = Teacher
        fields = UserSerializer.Meta.fields + ['nuip']

