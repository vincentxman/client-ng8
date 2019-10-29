import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

const catsGql = gql`
{
  cats(limit: 10){
    id,
    name,
    age
  }
}
`;


@Component({
  selector: 'app-gh-cat',
  templateUrl: './gh-cat.component.html',
  styleUrls: ['./gh-cat.component.css']
})
export class GhCatComponent implements OnInit, OnDestroy {
  private catsSubscription: Subscription;
  cats: any;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.catsSubscription = this.apollo
      .watchQuery({
        query: catsGql,
      })
      .valueChanges.subscribe(result => {
        this.cats = result.data && result.data['cats'];
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
  ngOnDestroy() {
    this.catsSubscription.unsubscribe();
  }
}
