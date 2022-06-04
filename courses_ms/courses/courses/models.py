from decimal import Decimal
from uuid import uuid4
from django.utils.translation import gettext_lazy as _

from django.db import models

from courses.utils.models import AgileAcademusoftV2BackendModel


class Course(AgileAcademusoftV2BackendModel):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=10, unique=True)
    credits = models.PositiveSmallIntegerField(default=1)

    def __str__(self):
        return self.name