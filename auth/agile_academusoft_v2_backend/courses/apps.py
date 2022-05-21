from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class CoursesConfig(AppConfig):
    name = "agile_academusoft_v2_backend.courses"
    verbose_name = _("Courses")

    def ready(self):
        try:
            import agile_academusoft_v2_backend.courses.signals  # noqa F401
        except ImportError:
            pass
