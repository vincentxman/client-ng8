import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gh-cat',
  templateUrl: './gh-cat.component.html',
  styleUrls: ['./gh-cat.component.css']
})
export class GhCatComponent implements OnInit, OnDestroy {
  private cats: any[];
  private catsSubscription: Subscription;
  private loading = true;
  private error: any;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.catsSubscription = this.apollo
      .watchQuery({
        query: gql`
        {
          cats(limit: 10){
            id,
            name,
            age
          }
        }
        `,
      })
      .valueChanges.subscribe(result => {
        this.cats = result.data && result.data['cats'];
        this.loading = result.loading;
        this.error = result.errors;
        console.log(this.cats);
      });
  }
  ngOnDestroy() {
    this.catsSubscription.unsubscribe();
  }
}
