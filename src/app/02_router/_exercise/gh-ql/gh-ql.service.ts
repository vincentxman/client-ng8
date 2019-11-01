import { Injectable } from '@angular/core';
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

  constructor(
    private getCatsGQL: GetCatsGQL,
    private getCatGQL: GetCatGQL,
    private updateCatGQL: UpdateCatGQL,
    private deleteCatGQL: DeleteCatGQL,
    private createCatGQL: CreateCatGQL,
    private catAddedGQL: CatAddedGQL,
    private catUpdatedGQL: CatUpdatedGQL,
    private catDeletedGQL: CatDeletedGQL,
  ) { }

  subscription_catAdded(): Observable<any> {
    return this.catAddedGQL.subscribe((result) => { dump(result.data, 'catAddedGQL'); });
  }

  subscription_catUpdated(): Observable<any> {
    return this.catUpdatedGQL.subscribe((result) => { dump(result.data, 'catUpdatedGQL'); });
  }

  subscription_catDeleted(): Observable<any> {
    return this.catDeletedGQL.subscribe((result) => { dump(result.data, 'catDeletedGQL'); });
  }

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
        console.log('valueChanges...', result.data.cats);
        return result.data.cats;
      })
    );
  }

  cat_get(id: string): Observable<Cat> {
    return this.getCatGQL.watch(
      { id },
    ).valueChanges.pipe(map(
      (result, loading) => {
        console.log('valueChanges...', result.data.cat);
        return result.data.cat;
      })
    );
  }

  cat_create(cat: CatDto): void {
    // this.createCatGQL.mutate({ name: cat.name, age: cat.age, breed: cat.breed }).subscribe(
    this.createCatGQL.mutate({ catDt: cat }).subscribe(
      (result) => {
        console.log('createCat...', result.data);
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
  }

  cat_delete(id: string): boolean {
    this.deleteCatGQL.mutate({ id }).subscribe(
      (result) => {
        console.log('deleteCat...', result.data);
        return true;
      },
      (error) => {
        console.log('there was an error sending the query', error);
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
        console.log('updateCat...', result.data);
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
  }
}


