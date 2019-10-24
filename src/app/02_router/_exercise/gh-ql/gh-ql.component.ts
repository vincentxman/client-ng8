import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat, GetCatsGQL, DeleteCatGQL } from 'src/_share/codegen/gh-ql.apollo-angular';
import { Mutation, Subscription } from '../../../../_share/codegen/gh-ql.apollo-angular';

@Component({
  selector: 'app-gh-ql',
  templateUrl: './gh-ql.component.html',
  styleUrls: ['./gh-ql.component.css']
})
export class GhQLComponent implements OnInit {
  cats: Observable<Cat[]>;
  selId = "";

  dump(idx: number): void {
    console.log('cats.................' + idx);
  }

  constructor(private getCatsGQL: GetCatsGQL, private deleteCatGQL: DeleteCatGQL) {
    this.getAllCats();
  }

  ngOnInit(): void {
    this.dump(3);
  }

  doClick(id: string) {
    this.selId = id;
  }

  doDelete(id: string) {
    this.deleteCat(id);
  }

  getAllCats() {
    this.dump(1);
    // this.cats = this.getCatsGQL.fetch({ limit: 30 }).pipe(map(
    this.cats = this.getCatsGQL.watch({ limit: 30 }).valueChanges.pipe(map(
      result => {
        this.dump(4);
        return result.data.cats;
      }
    ));
    this.dump(2);
  }

  deleteCat(id: string) {
    this.dump(0.1);
    this.deleteCatGQL.mutate({ id: this.selId }).subscribe(
      (result) => {
        this.dump(0.3);
        console.log('got data', result.data);
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
    this.dump(0.2);
  }
}
