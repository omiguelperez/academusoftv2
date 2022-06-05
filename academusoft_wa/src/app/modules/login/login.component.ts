import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

  formulario = new FormGroup({
    Identificacion: new FormControl(null,[Validators.max(9999999999999),Validators.min(0),Validators.required]),
    Pass: new FormControl(null,Validators.required),
  });

  activacion = new FormGroup({
    codigo: new FormControl(null,[Validators.required]),
    correo: new FormControl(null,[Validators.required]),
  });

  async guardar(){
    if(this.formulario.invalid){
      alert("Invalido");
      return;
    }
    alert("Valido");
  }
}
