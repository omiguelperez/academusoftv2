from django.contrib.auth.backends import ModelBackend
from django_auth_ldap.backend import LDAPBackend


class AuthBackend(ModelBackend):

    def authenticate(self, *args, **kwargs):

        ldap_user = LDAPBackend().authenticate(*args, **kwargs)

        local_user = super().authenticate(*args, **kwargs)

        if ldap_user is None or local_user is None:
            return None

        return ldap_user

