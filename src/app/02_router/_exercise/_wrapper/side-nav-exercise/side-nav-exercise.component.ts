import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav-exercise',
  templateUrl: './side-nav-exercise.component.html',
  styleUrls: ['./side-nav-exercise.component.css']
})
export class SideNavExerciseComponent implements OnInit {
  static sidebarItems: string[];
  components = SideNavExerciseComponent.sidebarItems;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }

}

