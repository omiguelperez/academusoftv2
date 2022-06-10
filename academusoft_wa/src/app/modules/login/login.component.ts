import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AcademusoftService } from 'src/app/core/services/academusoft.service';
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

  ngOnInit(): void {}

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  formulario = new FormGroup({
    Identificacion: new FormControl(null,Validators.required),
    Pass: new FormControl(null,Validators.required),
  });

  token:string = '';
  async guardar(){
    if(this.formulario.invalid){
      alert("Invalido");
      return;
    }
    const UPVOTE_POST = gql`mutation {
      login(Auth: {username: "${this.formulario.value.Identificacion}", password: "${this.formulario.value.Pass}"}) {
        token
      }
    }`;
    this.apollo.mutate({
      mutation: UPVOTE_POST,
      variables: {
        postId: 12
      }
    }).subscribe(({ data } : any) => {
      this.token = data?.login.token
      console.log(this.token);
    },(error) => {
      alert("Invalido");
      console.log('there was an error sending the query', error);
    });
  }
}
