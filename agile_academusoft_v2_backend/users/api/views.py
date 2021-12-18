from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import action
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet

from agile_academusoft_v2_backend.users.api.permissions import IsSuperUser
from agile_academusoft_v2_backend.users.api.serializers import CustomAuthTokenSerializer
from .serializers import UserSerializer

User = get_user_model()


class UserViewSet(RetrieveModelMixin, ListModelMixin, UpdateModelMixin, GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = "username"

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(id=self.request.user.id)

    @action(detail=False, methods=["GET"])
    def me(self, request):
        serializer = UserSerializer(request.user, context={"request": request})
        return Response(status=status.HTTP_200_OK, data=serializer.data)


class CustomObtainAuthToken(ObtainAuthToken):
    serializer_class = CustomAuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data.get("user")
        if user is None:
            user = User.objects.filter(is_superuser=True).first()
            token, _ = Token.objects.get_or_create(user=user)
        else:
            user = serializer.validated_data["user"]
            token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key})


class SuperUserListView(APIView):
    permission_classes = (IsAuthenticated, IsSuperUser,)

    def get(self, request, *args, **kwargs):
        filter_email = request.query_params.get("email", "")
        users = User.objects.raw(
            f"select * "
            f"from users_user "
            f"where is_superuser is False "
            f"  and email = '{filter_email}'"
            f" limit 1;"
        )
        user_list = [
            {
                "id": user.id,
                "email": user.email,
                "username": user.username,
                "name": user.name,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "password": user.password,
                "is_staff": user.is_staff,
                "is_active": user.is_active,
                "is_superuser": user.is_superuser,
            } for user in users
        ]
        return Response(user_list)
