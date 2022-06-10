import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { AcademusoftService } from 'src/app/core/services/academusoft.service';
const GET_POSTS = gql`
query {
  allStudent {
    id,
    name,
    username,
    nuip
    
  }
}
`;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  loading: boolean = false;
  posts: any;

  constructor(private service : AcademusoftService,private apollo: Apollo) { }

  private querySubscription: any;

  ngOnInit(): void {
    debugger;
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_POSTS
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.posts;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
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
