from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    #: First and last name do not cover name patterns around the globe
    name = models.CharField(_("Name of User"), blank=True, max_length=255)

    first_name = None
    last_name = None

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class ThirdPartyUser(User):
    CC = 'CC'
    TI = 'TI'
    CE = 'CE'
    DOC_TYPE_ENUM = (
        (CC, _('Cédula de Ciudadanía')),
        (CC, _('Tarjeta de Identidad')),
        (CC, _('Cédula de Extranjería')),
    )

    nuip = models.CharField(_("Personal Identification Number"), max_length=20)
    doc_type = models.CharField(choices=DOC_TYPE_ENUM, default=TI, max_length=5)

    class Meta:
        abstract = True


class Student(ThirdPartyUser):
    class Meta:
        verbose_name = _("Student")
        verbose_name_plural = _("Students")

    def __str__(self):
        return _('Student %(name)s') % {'name': self.name}


class Teacher(ThirdPartyUser):
    class Meta:
        verbose_name = _("Teacher")
        verbose_name_plural = _("Teachers")

    def __str__(self):
        return _('Teacher %(name)s') % {'name': self.name}
