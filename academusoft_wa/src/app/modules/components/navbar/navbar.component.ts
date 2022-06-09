import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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
