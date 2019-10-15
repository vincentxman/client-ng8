import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export const exComponentsList = [
  'test1', 'test2'
];

@Component({
  selector: 'app-ex-side-nav',
  templateUrl: './ex-side-nav.component.html',
  styleUrls: ['./ex-side-nav.component.css']
})
export class ExSideNavComponent implements OnInit {
  components = exComponentsList;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }
}
