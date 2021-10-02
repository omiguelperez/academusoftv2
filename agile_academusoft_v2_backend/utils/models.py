from uuid import uuid4

from django.db import models
from django.utils.translation import gettext_lazy as _


class AgileAcademusoftV2BackendModel(models.Model):
    """Basic model with custom fields."""

    id = models.UUIDField(_('Unique Record Identifier'), default=uuid4, primary_key=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """This model is abstract because all other models will inherit from this."""
        abstract = True
