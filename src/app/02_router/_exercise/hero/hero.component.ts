import { Component, OnInit } from '@angular/core';

import { Hero } from '../class/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => {
        this.heroes = heroes;
        console.log(heroes);
      });
  }

  onClick() {
    this.getHeroes();
  }
}
