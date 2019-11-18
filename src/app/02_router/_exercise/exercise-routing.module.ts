import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { GhQLComponent } from './gh-codegen/gh-ql.component';
import { TstComponent } from './tst/tst.component';
import { CountryComponent } from './country/country.component';
import { SideNavExerciseComponent } from './_wrapper/side-nav-exercise/side-nav-exercise.component';
import { GhCatComponent } from './gh-test/gh-cat.component';
import { ItemsComponent } from './items/items.component';
import { MarkdownTestComponent } from './markdown-test/markdown-test.component';
import { dump } from '../../../_share/utilities/tools';
import { MyChildRouterTestComponent } from './my-child-router-test/my-child-router-test.component';
import { ChildAComponent } from './my-child-router-test/child-a/child-a.component';
import { ChildBComponent } from './my-child-router-test/child-b/child-b.component';
import { MyChildAuxRouterTestComponent } from './my-child-aux-router-test/my-child-aux-router-test.component';
import { ChatComponent } from './my-child-aux-router-test/chat/chat.component';



// 必须与router的path名称相同，大小写不用一样
SideNavExerciseComponent.sidebarItems = [
  'Gh-codegen',
  'Gh-test',
  'Tst',
  'Items',
  'Country',
  'Markdown-test',
  'Child-Router',
  'Child-Aux-Router',
];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tst' },
  { path: 'gh-codegen', component: GhQLComponent },
  { path: 'gh-test', component: GhCatComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'tst', component: TstComponent },
  { path: 'country', component: CountryComponent },
  { path: 'markdown-test', component: MarkdownTestComponent },

  // 子路由
  {
    path: 'child-router', component: MyChildRouterTestComponent, children: [
      { path: '', component: ChildAComponent },
      { path: 'a', component: ChildAComponent },
      { path: 'b', component: ChildBComponent },
      { path: '**', component: ChildAComponent },
    ]
  },

  // 子路由 + 辅助路由
  {
    path: 'child-aux-router', component: MyChildAuxRouterTestComponent, children: [
      { path: '', component: ChildAComponent },
      { path: 'a', component: ChildAComponent },
      { path: 'b', component: ChildBComponent },
      { path: 'chat', component: ChatComponent, outlet: 'myaux' },
      { path: '**', component: ChildAComponent },
    ]
  },

  // 其他
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


