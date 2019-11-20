import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/02_router/_exercise/tst/service/product.service';
import { HeroService } from 'src/app/02_router/_exercise/tst/service/hero.service';
import { Hero } from './class/hero';
import { dump } from '../../../../_share/utilities/tools';
import { ExcepService } from './service/excep.service';
const $ = require('jquery');

@Component({
  selector: 'app-tst',
  templateUrl: './tst.component.html',
  styleUrls: ['./tst.component.css']
})
export class TstComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private productService: ProductService,
    private heroService: HeroService,
    private excepService: ExcepService,
  ) { }

  ngOnInit() {
    const j = $('#jqueryTest');
    j.html('<span class="badge badge-primary">Success:</span> jquery worked.');
    j.css("color", "green");
  }

  getProducts(): void {
    dump('onclick');
    this.productService.getProducts()
      .subscribe(products => dump(products, 'getProducts', true));
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => {
        this.heroes = heroes;
        dump(heroes, 'getHeroes', true);
      });
  }

  getExcep(): void {
    this.excepService.getProducts()
      .subscribe(products => dump(JSON.stringify(products), 'getProducts'));
  }
}
