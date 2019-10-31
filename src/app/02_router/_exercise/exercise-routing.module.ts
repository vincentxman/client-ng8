import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhQLComponent } from './gh-ql/gh-ql.component';
import { TstComponent } from './tst/tst.component';
import { CountryComponent } from './country/country.component';
import { SideNavExerciseComponent } from './_wrapper/side-nav-exercise/side-nav-exercise.component';
import { GhCatComponent } from './gh-cat/gh-cat.component';


// 必须与router的path名称相同，大小写不用一样
SideNavExerciseComponent.sidebarItems = [
  'GraphQL-test', 'Cats', 'Tst', 'Country'
];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tst' },
  { path: 'graphql-test', component: GhQLComponent },
  { path: 'cats', component: GhCatComponent },
  { path: 'tst', component: TstComponent },
  { path: 'country', component: CountryComponent },
  { path: '**', component: TstComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule {}


