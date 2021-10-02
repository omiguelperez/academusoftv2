from decimal import Decimal

from django.db import models

from agile_academusoft_v2_backend.utils.models import AgileAcademusoftV2BackendModel


class Course(AgileAcademusoftV2BackendModel):
    """Base course model. This data will be manuallly populated."""

    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    code = models.CharField(max_length=10, unique=True)
    credits = models.PositiveSmallIntegerField(default=1)

    def __str__(self):
        return self.name


class CourseGroup(AgileAcademusoftV2BackendModel):
    """Course can has several groups in the same semester."""

    course = models.ForeignKey(
        Course,
        on_delete=models.PROTECT,
        related_name='course_groups',
    )
    name = models.CharField(max_length=10)
    teacher = models.ForeignKey(
        'users.Teacher',
        on_delete=models.PROTECT,
        related_name='teacher_groups',
    )

    # Date
    year = models.PositiveSmallIntegerField()
    semester = models.PositiveSmallIntegerField()


class StudentEnrollment(AgileAcademusoftV2BackendModel):
    """Student enrollment in a given group."""

    course_group = models.ForeignKey(
        CourseGroup,
        on_delete=models.PROTECT,
        related_name='students'
    )
    student = models.ForeignKey(
        'users.Student',
        on_delete=models.PROTECT,
        related_name='enrollments'
    )


class Score(AgileAcademusoftV2BackendModel):
    """Student score at specific semester."""

    NUMBER_OF_SCORES = Decimal(3)

    first = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    second = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    third = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    final = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)


