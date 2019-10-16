import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/02_router/_exercise/tst/service/product.service';
import { HeroService } from 'src/app/02_router/_exercise/tst/service/hero.service';
import { Hero } from './class/hero';

@Component({
  selector: 'app-tst',
  templateUrl: './tst.component.html',
  styleUrls: ['./tst.component.css']
})
export class TstComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private productService: ProductService,
    private heroService: HeroService) { }

  ngOnInit() {
  }

  getProducts(): void {
    console.log('onclick....');
    this.productService.getProducts()
      .subscribe(products => console.log(products));
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => {
        this.heroes = heroes;
        console.log(heroes);
      });
  }
}
