import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  data = `{
    "data": {
      "allCourse": [
        {
          "id": "e21060e5-f289-46e4-b8ce-0fc32641551a",
          "name": "INGENIERIA DEL SOFTWARE I ",
          "code": "SS444-A",
          "credits": 4
        },
        {
          "id": "34eba002-addc-4bb6-9415-ec139db0c552",
          "name": "SISTEMAS OPERATIVOS",
          "code": "SS438",
          "credits": 4
        },
        {
          "id": "35eba002-addc-4bb6-9415-ec139db0c552",
          "name": "ANALISIS NUMERICO",
          "code": "MT309B",
          "credits": 3
        },
        {
          "id": "35eba002-addc-4bb6-9415-ec139db0c552",
          "name": "CULTURAS INTERNACIONALES ",
          "code": "HM305",
          "credits": 2
        }
      ]
    }
  }`;

  courses:any
  ngOnInit(): void {
    let listCourses = JSON.parse(this.data)
    this.courses = listCourses.data?.allCourse;
  }

  course(){
    this.router.navigate(['/course']);
  }

  student(){
    this.router.navigate(['/student']);
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
  }

}
