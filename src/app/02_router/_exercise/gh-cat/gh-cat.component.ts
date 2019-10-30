import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { getAllCats_gql } from './_gql';

@Component({
  selector: 'app-gh-cat',
  templateUrl: './gh-cat.component.html',
  styleUrls: ['./gh-cat.component.css']
})
export class GhCatComponent implements OnInit, OnDestroy {
  private catsSubscription: Subscription;
  selectedId: string;
  cats: any; // ApolloQueryResult<Array<Cat>>;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.cat_GetAll(10);
  }

  doCat_getAll() {
    this.cat_GetAll(10);
  }

  doCat_create() {
  }

  doCat_update(id: string) {

  }

  doCat_delete(id: string) {

  }

  cat_GetAll(limit: number) {
    this.catsSubscription = this.apollo
      .watchQuery({
        query: getAllCats_gql,
        notifyOnNetworkStatusChange: true,
        variables: {
          limit: limit,
        },
      })
      .valueChanges.subscribe({
        next: (result) => {
          this.cats = result.data && result.data['cats'];
          this.loading = result.loading;
          this.error = result.errors;
        },
        error: (err) => {
          this.error = err;
        },
        complete: () => {
        }
      });
  }

  cat_Create() {

  }

  ngOnDestroy() {
    this.catsSubscription.unsubscribe();
  }
}
