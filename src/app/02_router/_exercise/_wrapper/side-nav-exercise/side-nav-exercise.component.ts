import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const componentsList = [
  'Products', 'Heroes', 'GraphQL'
];

@Component({
  selector: 'app-side-nav-exercise',
  templateUrl: './side-nav-exercise.component.html',
  styleUrls: ['./side-nav-exercise.component.css']
})
export class SideNavExerciseComponent implements OnInit {
  components = componentsList;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }
}
