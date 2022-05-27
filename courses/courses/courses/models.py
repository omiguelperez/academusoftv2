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


class CourseGroup(AgileAcademusoftV2BackendModel):
    course = models.ForeignKey(
        Course,
        on_delete=models.PROTECT,
        related_name='course_groups',
    )
    name = models.CharField(max_length=10)
    teacher = models.UUIDField(default=uuid4)

    # Date
    year = models.PositiveSmallIntegerField()
    semester = models.PositiveSmallIntegerField()

    def __str__(self):
        return _('Group %(group_name)s of %(course_name)s') % {
            'group_name': self.name,
            'course_name': self.course.name,
        }

