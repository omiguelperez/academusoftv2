import pytest

from enrollment.enrollment.models import Course, CourseGroup, Schedule
from enrollment.enrollment.queries import list_by_enrolling_courses
from enrollment.users.models import Teacher, Student

pytestmark = pytest.mark.django_db


def test_obtener_materias_para_matricular_solo_primer_semestre():
    # Dado que exista la siguiente materia ING-01 Introducción a la Ingeniería de Sistemsa
    materia = Course.objects.create(
        name='Introducción a la Ingeniería de Sistemas',
        code='ING-01',
        credits=4,
    )
    # Y que exista el profesor John Doe
    profesor = Teacher.objects.create(
        username='john',
        name='John Doe',
        email='johndoe@unicesar.edu.co',
        password='Transport9-Carload-Jazz'
    )
    # Y que exista el grupo AL-01 de Introducción a la Ingeniería de Sistemas
    grupo = CourseGroup.objects.create(
        course=materia,
        teacher=profesor,
        year=2021,
        semester=2,
        name='AL-01',
    )
    # Y que exista una clase a las 2pm hasta las 4pm
    Schedule.objects.create(
        course_group=grupo,
        week_day=Schedule.MONDAY,
        start_time=14,
        end_time=16
    )
    # Y que exista el estudiante Foo Bar
    estudiante = Student.objects.create(
        username='foo',
        name='Foo Bar',
        email='foo@unicesar.edu.co',
        password='Transport9-Carload-Jazz'
    )

    # Cuando intente consultar las materias disponibles para matricular
    materias = list_by_enrolling_courses(estudiante.user_ptr)

    # Entonces debe obtenerse la materia ING-01 Introducción a la Ingeniería de Sistemas
    assert len(materias) == 1
    assert materias.first() == materia
