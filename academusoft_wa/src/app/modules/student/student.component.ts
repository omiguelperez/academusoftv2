import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  data = `{
    "data": {
        "allStudent": [
            {
                "id": 1,
                "name": "Alberto Antonio Perez Paternina",
                "username": "alb01",
                "nuip": "0001"
            },
            {
                "id": 2,
                "name": "Daner Aguilar Sarmiento",
                "username": "daner02",
                "nuip": "0002"
            },
            {
                "id": 3,
                "name": "Daniel Eduardo Martinez Herrera",
                "username": "daniel03",
                "nuip": "0003"
            },
            {
                "id": 4,
                "name": "Daniel Torres Martinez",
                "username": "daniel04",
                "nuip": "0004"
            },
            {
                "id": 5,
                "name": "Oscar Perez Padilla",
                "username": "Oscar",
                "nuip": "0005"
            },
            {
                "id": 6,
                "name": "Wilder Guerrero Ortega",
                "username": "wilder",
                "nuip": "0006"
            }
        ]
    }
}`;
  
  
  student:any;
  ngOnInit(): void {

    let listStudent = JSON.parse(this.data)
    this.student = listStudent.data?.allStudent;
  }

  course(){
    this.router.navigate(['/course']);
  }

  studentr(){
    this.router.navigate(['/student']);
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
  }

}
