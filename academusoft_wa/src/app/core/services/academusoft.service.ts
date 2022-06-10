import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademusoftService {
  loading: boolean = false;
  posts: any;
  constructor(private apollo: Apollo) {}

  

  async allStudent(){
    const GET_POSTS = gql`
    query {
      allStudent {
        id,
        name,
        username,
        nuip
      }
    }`;
    let querySubscription: Subscription;
    querySubscription = await this.apollo.watchQuery<any>({
      query: GET_POSTS
    }).valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.allStudent;
        console.log(this.posts);
        querySubscription.unsubscribe();
        return this.posts;
      });

      console.log(this.posts);
  }

}



