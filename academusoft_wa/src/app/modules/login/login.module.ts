import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AcademusoftService } from 'src/app/core/services/academusoft.service';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { 
  constructor(private AcademusoftService : AcademusoftService) { }
}
