from django.utils.translation import gettext_lazy as _

from enrollment.courses.models import Course


def list_enrolled_courses(logged_user):
    return Course.objects.filter(course_groups__students__student=logged_user.student)


def list_by_enrolling_courses(logged_user):
    enrolled_courses = Course.objects.filter(
        course_groups__students__student=logged_user.student
    )
    courses_by_enrolling = Course.objects.exclude(
        pk__in=enrolled_courses.values('pk')
    )
    return courses_by_enrolling


def list_courses_for_enrolling(logged_user, action):
    action_list_courses_method_map = {
        'enrolled': list_enrolled_courses,
        'by_enrolling': list_by_enrolling_courses,
    }
    if action not in action_list_courses_method_map.keys():
        raise ValueError(_("Invalid action name."))
    return action_list_courses_method_map[action](logged_user)
