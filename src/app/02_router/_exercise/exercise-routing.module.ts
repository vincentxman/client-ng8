import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhQLComponent } from './gh-codegen/gh-ql.component';
import { TstComponent } from './tst/tst.component';
import { CountryComponent } from './country/country.component';
import { SideNavExerciseComponent } from './_wrapper/side-nav-exercise/side-nav-exercise.component';
import { GhCatComponent } from './gh-test/gh-cat.component';
import { ItemsComponent } from './items/items.component';
import { MarkdownTestComponent } from './markdown-test/markdown-test.component';
import { dump } from '../../../_share/utilities/tools';



// 必须与router的path名称相同，大小写不用一样
SideNavExerciseComponent.sidebarItems = [
  'Gh-codegen',
  'Gh-test',
  'Tst',
  'Items',
  'Country',
  'Markdown-test',
];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tst' },
  { path: 'gh-codegen', component: GhQLComponent },
  { path: 'gh-test', component: GhCatComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'tst', component: TstComponent },
  { path: 'country', component: CountryComponent },
  { path: 'markdown-test', component: MarkdownTestComponent },
  { path: '**', component: TstComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule {
  constructor() {
    dump('ExerciseRoutingModule');
  }
}


