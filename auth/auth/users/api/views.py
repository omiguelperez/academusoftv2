from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin, CreateModelMixin
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAuthenticated
from auth.users.api.permissions import IsSuperUser

from .serializers import UserSerializer

User = get_user_model()


class UserViewSet(RetrieveModelMixin, ListModelMixin, UpdateModelMixin, CreateModelMixin, GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = "username"

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(id=self.request.user.id)

    @action(detail=False, methods=["GET"])
    def me(self, request):
        serializer = UserSerializer(request.user, context={"request": request})
        return Response(status=status.HTTP_200_OK, data=serializer.data)


class SuperUserListView(APIView):
    permission_classes = (IsAuthenticated, IsSuperUser,)

    def get(self, request, *args, **kwargs):
        filter_email = request.query_params.get("email", "")
        users = User.objects.filter(
            Q(is_superuser=True) | Q(is_staff=True),
            is_staff=False,
            email=filter_email,
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
