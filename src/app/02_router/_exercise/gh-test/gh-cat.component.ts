import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription, Observable } from 'rxjs';
import { GetCatsDocument, Cat } from '../gh-codegen/_graphql/_codegen';
import { WatchQueryFetchPolicy } from 'apollo-client';

@Component({
  selector: 'app-gh-cat',
  templateUrl: './gh-cat.component.html',
  styleUrls: ['./gh-cat.component.css']
})
export class GhCatComponent implements OnInit, OnDestroy {
  private catsSubscription: Subscription;
  selectedId: string;
  cats: Observable<Cat[]>;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.cat_GetAll(0, 10);
  }

  doCat_getAll() {
    //this.cat_GetAll(0, 10);
  }

  doCat_create() {
  }

  doCat_update(id: string) {

  }

  doCat_delete(id: string) {

  }

  /*
  cat_getAll(
    offset: number,
    limit: number,
    fetchPolicy: WatchQueryFetchPolicy = 'cache-first'
  ): Observable<Array<Cat>> {
    // this.cats = this.getCatsGQL.fetch({ limit: 30 }).pipe(map(
    return this.getCatsGQL.watch(
      { offset, limit }, // curPage, orderBy, filter, offset = (curPage-1)*pageSize
      {
        notifyOnNetworkStatusChange: true,
        fetchPolicy,
      }
    ).valueChanges.pipe(map(
      (result, loading) => {
        dump(result.data.cats, 'valueChanges');
        return result.data.cats;
      })
    );
  }

  */
  cat_GetAll(
    offset: number,
    limit: number,
    fetchPolicy: WatchQueryFetchPolicy = 'cache-first'
  ) {
    this.catsSubscription = this.apollo
      .watchQuery({
        query: GetCatsDocument,
        notifyOnNetworkStatusChange: true,
        variables: {
          offset,
          limit,
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
