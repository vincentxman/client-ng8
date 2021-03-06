import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CatDto, Cat } from './_graphql/_codegen';
import { GhQLService } from './gh-ql.service';
import { dump } from '../../../../_share/utilities/tools';

@Component({
  selector: 'app-gh-ql',
  templateUrl: './gh-ql.component.html',
  styleUrls: ['./gh-ql.component.css']
})
export class GhQLComponent implements OnInit {
  cats$: Observable<Cat[]>;
  cat$: Observable<Cat>;
  catAdded$: Observable<any>;
  catUpdated$: Observable<any>;
  catDeleted$: Observable<any>;
  loading = true;
  idSelected: string;

  constructor(
    private ghQlService: GhQLService,
  ) {
    dump('GhQLComponent');
    this.cats$ = this.ghQlService.cat_getSome(0, 5);
  }

  ngOnInit(): void {
    this.catAdded$ = this.ghQlService.subscription_catAdded();
    this.catUpdated$ = this.ghQlService.subscription_catUpdated();
    this.catDeleted$ = this.ghQlService.subscription_catDeleted();
    this.ghQlService.loading$.subscribe({ next: (v) => this.loading = (v > 0) });
  }

  doCat_getSome() {
    this.cats$ = this.ghQlService.cat_getSome(0, 5, 'network-only');
  }

  doSelect(id: string) {
    this.idSelected = id;
  }

  doCat_create() {
    const cat: CatDto = { name: 'petter', age: 55, breed: 'yellow' };
    this.ghQlService.cat_create(cat);
  }

  doCat_update(id: string) {
    const cat: CatDto = { name: 'tom', age: 99, breed: 'white' };
    this.ghQlService.cat_update(id, cat);
  }

  doCat_delete(id: string) {
    this.ghQlService.cat_delete(id);
    // this.getAllCats();
    // this.cats = this.cats.pipe(map(cats => {
    //   return cats.filter((cat) => cat.id !== id);
    // }));
  }

  doCat_get() {
    this.cat$ = this.ghQlService.cat_get(this.idSelected);
  }
}
