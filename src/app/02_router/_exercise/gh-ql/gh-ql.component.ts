import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat, GetCatsGQL } from 'src/_share/codegen/gh-ql.apollo-angular';

@Component({
  selector: 'app-gh-ql',
  templateUrl: './gh-ql.component.html',
  styleUrls: ['./gh-ql.component.css']
})
export class GhQLComponent {
  cats: Observable<Cat[]>;

  constructor(getCatsGQL: GetCatsGQL) {
    this.cats = getCatsGQL.watch().valueChanges.pipe(map(
      result => {
        return result.data.cats;
      }
    ));
  }
}
