from django.db import models
from uuid import uuid4


class Course(models.Model):
    """Base course model. This data will be manuallly populated."""

    id = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    credits = models.PositiveSmallIntegerField(default=1)

    def __str__(self):
        return self.name

