import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export const componentsList = [
  'Accordion', 'Alert'
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  components = componentsList;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }

}
