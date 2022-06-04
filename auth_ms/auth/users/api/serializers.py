from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from rest_framework.authtoken.serializers import AuthTokenSerializer as RestFrameworkAuthTokenSerializer
from django.utils.translation import gettext_lazy as _

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


class AuthTokenSerializer(RestFrameworkAuthTokenSerializer):

    def validate(self, attrs):

        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(
                request=self.context.get('request'),
                username=username,
                password=password,
            )

            # To authenticate call simply returns None for is_active=False
            # users. (Assuming the default ModelBackend authentication backend)
            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = _('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs
