from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class EnrollmentConfig(AppConfig):
    name = "enrollment_ms.enrollment_ms"
    verbose_name = _("Enrollment")

    def ready(self):
        try:
            import enrollment.enrollment.signals  # noqa F401
        except ImportError:
            pass
