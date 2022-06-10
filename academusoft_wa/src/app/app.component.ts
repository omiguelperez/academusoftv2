import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademusoftService } from '../app/core/services/academusoft.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Academusoft_wa';

  constructor(
    private router: Router
  ) {


  }

  ngOnInit() {
    //this.router.navigate(['/login'])
  }
}
