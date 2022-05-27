from django.contrib import admin

from enrollment.enrollment.models import (
    StudentEnrollment,
    CourseGroup,
    Schedule,
)


@admin.register(CourseGroup)
class CourseGroupAdmin(admin.ModelAdmin):
    list_display = ['course', 'name', 'teacher', 'year', 'semester']
    search_fields = ['course', 'name', 'teacher']


@admin.register(StudentEnrollment)
class StudentEnrollmentAdmin(admin.ModelAdmin):
    list_display = ['student', 'course_group']
    autocomplete_fields = ['course_group']


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ['course_group', 'week_day', 'start_time', 'end_time']
    autocomplete_fields = ['course_group']
