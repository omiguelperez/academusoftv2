import pytest

from agile_academusoft_v2_backend.courses.models import Course, CourseGroup, Schedule
from agile_academusoft_v2_backend.courses.queries import list_by_enrolling_courses
from agile_academusoft_v2_backend.users.models import Teacher, Student

pytestmark = pytest.mark.django_db


def test_obtener_materias_para_matricular_solo_primer_semestre():
    # Dado que exista la siguiente materia:
    materia = Course.objects.create(
        name='Introducción a la Ingeniería de Sistemas',
        code='ING-01',
        credits=4,
    )
    # Y que exista el profesor
    profesor = Teacher.objects.create(
        username='profesor',
        name='Profesor Algoritmos',
        email='profesor@unicesar.edu.co',
        password='Transport9-Carload-Jazz'
    )
    # Y que exista el grupo
    grupo = CourseGroup.objects.create(
        course=materia,
        teacher=profesor,
        year=2021,
        semester=2,
        name='AL-01',
    )
    # Y que exista el horario
    Schedule.objects.create(
        course_group=grupo,
        week_day=Schedule.MONDAY,
        start_time=14,
        end_time=16
    )
    estudiante = Student.objects.create(
        username='estudiante',
        name='Estudiante',
        email='estudiante@unicesar.edu.co',
        password='Transport9-Carload-Jazz'
    )

    # Cuando intente consultar las materias disponibles para matricular
    materias = list_by_enrolling_courses(estudiante.user_ptr)

    assert len(materias) == 1
    assert materias.first() == materia
