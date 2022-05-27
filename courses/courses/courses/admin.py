from django.contrib import admin

from courses.courses.models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['name', 'code', 'credits']
    search_fields = ['name', 'code']
