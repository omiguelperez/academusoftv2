from decimal import Decimal
from uuid import uuid4
from django.utils.translation import gettext_lazy as _

from django.db import models

from enrollment.utils.models import AgileAcademusoftV2BackendModel


class CourseGroup(AgileAcademusoftV2BackendModel):
    course = models.UUIDField(default=uuid4)
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


# Registration
class StudentEnrollment(AgileAcademusoftV2BackendModel):
    course_group = models.ForeignKey(
        CourseGroup,
        on_delete=models.PROTECT,
        related_name='students'
    )
    student = models.UUIDField(default=uuid4)


class Schedule(AgileAcademusoftV2BackendModel):

    MONDAY = 'monday'
    TUESDAY = 'tuesday'
    WEDNESDAY = 'wednesday'
    THURSDAY = 'thursday'
    FRIDAY = 'friday'
    SATURDAY = 'saturday'

    WEEKDAY_CHOICES = (
        (MONDAY, 'Monday'),
        (TUESDAY, 'Tuesday'),
        (WEDNESDAY, 'Wednesday'),
        (THURSDAY, 'Thursday'),
        (FRIDAY, 'Friday'),
        (SATURDAY, 'Saturday'),
    )

    course_group = models.ForeignKey(
        CourseGroup,
        on_delete=models.PROTECT,
        related_name='schedules'
    )
    week_day = models.CharField(choices=WEEKDAY_CHOICES, max_length=20)
    start_time = models.PositiveSmallIntegerField()
    end_time = models.PositiveSmallIntegerField()


class Score(AgileAcademusoftV2BackendModel):

    NUMBER_OF_SCORES = Decimal(3)

    first = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    second = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    third = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    final = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)


