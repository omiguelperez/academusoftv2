import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  loading: boolean = false;
  constructor(
    private router: Router,
    private apollo: Apollo
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
  private querySubscription: any;
  courses:any
  ngOnInit(): void {
    const GET_POSTS = gql`
    query {
      allCourse {
        id,
        name,
        code,
        credits
      }
    }`;
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_POSTS
    }).valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.courses = data.allCourse;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  course(){
    this.router.navigate(['/course']);
  }

  student(){
    this.router.navigate(['/student']);
  }

  cerrarSesion(){
    if(localStorage.getItem("User")){
      localStorage.removeItem("token")
      localStorage.removeItem("User")
      this.router.navigate(['/login'])
    }
  }



}
