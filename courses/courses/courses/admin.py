from django.contrib import admin

from courses.courses.models import (
    StudentEnrollment,
    CourseGroup,
    Course,
    Schedule,
)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['name', 'code', 'credits']
    search_fields = ['name', 'code']


@admin.register(CourseGroup)
class CourseGroupAdmin(admin.ModelAdmin):
    list_display = ['course', 'name', 'teacher', 'year', 'semester']
    search_fields = ['course__name', 'name', 'teacher__name']


@admin.register(StudentEnrollment)
class StudentEnrollmentAdmin(admin.ModelAdmin):
    list_display = ['student', 'course_group']
    autocomplete_fields = ['course_group', 'student']


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ['course_group', 'week_day', 'start_time', 'end_time']
    autocomplete_fields = ['course_group']
