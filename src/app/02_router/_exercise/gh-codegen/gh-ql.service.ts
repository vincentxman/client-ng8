import { Injectable, EventEmitter, Output } from '@angular/core';
import { GetCatsGQL, GetCatGQL, UpdateCatGQL, DeleteCatGQL, CreateCatGQL, CatAddedGQL, CatUpdatedGQL, CatDeletedGQL, Cat, CatDto } from './_graphql/_codegen';
import { WatchQueryFetchPolicy } from 'apollo-client';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { GhQlLazyModule } from './gh-ql-lazy.module';
import { dump } from '../../../../_share/utilities/tools';

@Injectable({
  providedIn: GhQlLazyModule
})
export class GhQLService {
  loading$ = new EventEmitter<number>();
  constructor(
    private getCatsGQL: GetCatsGQL,
    private getCatGQL: GetCatGQL,
    private updateCatGQL: UpdateCatGQL,
    private deleteCatGQL: DeleteCatGQL,
    private createCatGQL: CreateCatGQL,
    private catAddedGQL: CatAddedGQL,
    private catUpdatedGQL: CatUpdatedGQL,
    private catDeletedGQL: CatDeletedGQL,
  ) {
  }

  subscription_catAdded(): Observable<any> {
    return this.catAddedGQL.subscribe((result) => { dump(result.data, 'catAddedGQL.subscribe'); });
  }

  subscription_catUpdated(): Observable<any> {
    return this.catUpdatedGQL.subscribe((result) => { dump(result.data, 'catUpdatedGQL.subscribe'); });
  }

  subscription_catDeleted(): Observable<any> {
    return this.catDeletedGQL.subscribe((result) => { dump(result.data, 'catDeletedGQL.subscribe'); });
  }

  cat_getSome(
    skip: number,
    limit: number,
    fetchPolicy: WatchQueryFetchPolicy = 'cache-first'
  ): Observable<Array<Cat>> {
    // this.cats = this.getCatsGQL.fetch({ limit: 30 }).pipe(map(
    this.loading$.emit(1);
    return this.getCatsGQL.watch(
      { skip, limit }, // curPage, orderBy, filter, skip = (curPage-1)*pageSize
      {
        notifyOnNetworkStatusChange: true,
        fetchPolicy,
      }
    ).valueChanges.pipe(map(
      (result, loading) => {
        this.loading$.emit(loading);
        dump(result.data.cats, 'valueChanges', true);
        return result.data.cats;
      })
    );
  }

  cat_get(id: string): Observable<Cat> {
    this.loading$.emit(1);
    return this.getCatGQL.watch(
      { id },
      { notifyOnNetworkStatusChange: true }
    ).valueChanges.pipe(map(
      (result, loading) => {
        this.loading$.emit(loading);
        dump(result.data.cat, 'valueChanges', true);
        return result.data.cat;
      })
    );
  }

  cat_create(cat: CatDto): void {
    // this.createCatGQL.mutate({ name: cat.name, age: cat.age, breed: cat.breed }).subscribe(
    this.createCatGQL.mutate({ catDt: cat }).subscribe(
      (result) => {
        dump(result.data, 'createCat');
      },
      (error) => {
        dump(error, 'there was an error sending the query');
      }
    );
  }

  cat_delete(id: string): boolean {
    this.deleteCatGQL.mutate({ id }).subscribe(
      (result) => {
        dump(result.data, 'deleteCat');
        return true;
      },
      (error) => {
        dump(error, 'there was an error sending the query');
      }
    );
    return false;
  }

  cat_update(id: string, cat: CatDto) {
    this.updateCatGQL.mutate(
      { id, cat },
      {
        optimisticResponse: {
          __typename: 'Mutation',
          updateCat: {
            __typename: 'Cat',
            id: id,
            name: cat.name,
            age: cat.age,
            breed: cat.breed
          }
        }
      }
    ).subscribe(
      (result) => {
        dump(result.data, 'updateCat');
      },
      (error) => {
        dump(error, 'there was an error sending the query');
      }
    );
  }
}


