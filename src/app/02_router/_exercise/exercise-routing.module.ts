import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhQLComponent } from './gh-ql/gh-ql.component';
import { TstComponent } from './tst/tst.component';
import { CountryComponent } from './country/country.component';
import { SideNavExerciseComponent } from './_wrapper/side-nav-exercise/side-nav-exercise.component';


SideNavExerciseComponent.sidebarItems = [
  'GraphQL', 'Tst', 'Country'
];
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'graphql' },
  { path: 'graphql', component: GhQLComponent },
  { path: 'tst', component: TstComponent },
  { path: 'country', component: CountryComponent },
  { path: '**', component: TstComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule {}


