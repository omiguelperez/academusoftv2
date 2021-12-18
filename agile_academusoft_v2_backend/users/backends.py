from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model


UserModel = get_user_model()


class InsecurePlainPasswordBackend(BaseBackend):

    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None:
            username = kwargs.get(UserModel.USERNAME_FIELD)
        if username is None or password is None:
            return
        try:
            user = UserModel._default_manager.get_by_natural_key(username)
            print(f"{user=}")
        except UserModel.DoesNotExist:
            UserModel().set_password(password)
        else:
            if user.password == password:
                return user
