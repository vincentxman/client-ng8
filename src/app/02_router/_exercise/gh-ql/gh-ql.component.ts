import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mutation, Subscription, CatDto, CreateCatGQL, Cat, GetCatsGQL, DeleteCatGQL, UpdateCatGQL, CreateCat2GQL, CatAddedGQL } from './_graphql/_codegen';
import { filter } from 'minimatch';

@Component({
  selector: 'app-gh-ql',
  templateUrl: './gh-ql.component.html',
  styleUrls: ['./gh-ql.component.css']
})
export class GhQLComponent implements OnInit {
  cats: Observable<Cat[]>;
  catDto: CatDto;
  idSelected = "";
  lastCat = null;

  dump(idx: number, msg?: string): void {
    console.log('cats.................' + idx + ' msg:' + (msg || ''));
  }

  constructor(
    private getCatsGQL: GetCatsGQL,
    private deleteCatGQL: DeleteCatGQL,
    private updateCatGQL: UpdateCatGQL,
    // private createCatGQL: CreateCatGQL,
    private createCat2GQL: CreateCat2GQL,
    private catAddedGQL: CatAddedGQL,
  ) {
    this.cat_getAll();

    // this.lastCat = catAddedGQL.subscribe();
  }

  ngOnInit(): void {
  }

  doCat_getAll() {
    this.cat_getAll();
  }
  doClick(id: string) {
    this.idSelected = id;
  }

  doCat_create() {
    const cat: CatDto = { name: 'petter', age: 55, breed: 'yellow' };
    this.cat_create(cat);
  }

  doCat_update(id: string) {
    const cat: CatDto = { name: 'jerry', age: 55, breed: 'black' };
    this.cat_update(id, cat);
  }

  doCat_delete(id: string) {
    this.cat_delete(id);
    // this.getAllCats();
    // this.cats = this.cats.pipe(map(cats => {
    //   return cats.filter((cat) => cat.id !== id);
    // }));
  }
  cat_delete(id: string): boolean {
    this.deleteCatGQL.mutate({ id: this.idSelected }).subscribe(
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
  cat_getAll() {
    // this.cats = this.getCatsGQL.fetch({ limit: 30 }).pipe(map(
    this.cats = this.getCatsGQL.watch(
      { limit: 10 },
      {
        notifyOnNetworkStatusChange: true,
        // fetchPolicy: 'network-only'
      }
    ).valueChanges.pipe(map(
      (result, loading) => {
        console.log('valueChanges...', result.data.cats);
        return result.data.cats;
      }
    ));
  }

  cat_create(cat: CatDto) {
    // this.createCatGQL.mutate({ name: cat.name, age: cat.age, breed: cat.breed }).subscribe(
    this.createCat2GQL.mutate({ catDt: cat }).subscribe(
      (result) => {
        console.log('createCat...', result.data);
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
  }

  cat_update(id: string, cat: CatDto) {
    this.updateCatGQL.mutate({ id, cat }).subscribe(
      (result) => {
        console.log('updateCat...', result.data);
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
  }


}
