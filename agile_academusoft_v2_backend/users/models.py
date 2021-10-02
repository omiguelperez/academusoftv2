from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    """Default user for Agile Academusoft V2 Backend."""

    #: First and last name do not cover name patterns around the globe
    name = models.CharField(_("Name of User"), blank=True, max_length=255)

    def get_absolute_url(self):
        """Get url for user's detail view."""
        return reverse("users:detail", kwargs={"username": self.username})


class Student(User):
    """Student model to store custom data for this user type."""

    nuip = models.CharField(_("Personal Identification Number"), max_length=20)

    class Meta:
        verbose_name = _("Student")
        verbose_name_plural = _("Students")

    def __str__(self):
        """Return student full name."""
        return _('Student %(full_name)s') % {
            'full_name': ' '.join([self.first_name, self.last_name]),
        }


class Teacher(User):
    """Teacher model to store custom data for this user type."""

    nuip = models.CharField(_("Personal Identification Number"), max_length=20)

    class Meta:
        verbose_name = _("Teacher")
        verbose_name_plural = _("Teachers")

    def __str__(self):
        """Return teacher full name."""
        return _('Teacher %(full_name)s') % {
            'full_name': ' '.join([self.first_name, self.last_name]),
        }
