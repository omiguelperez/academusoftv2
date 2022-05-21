from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "agile_academusoft_v2_backend.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import auth.users.signals  # noqa F401
        except ImportError:
            pass
