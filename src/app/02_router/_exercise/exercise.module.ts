import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavExerciseComponent } from './_wrapper/side-nav-exercise/side-nav-exercise.component';
import { PageWrapperExerciseComponent } from './_wrapper/page-wrapper-exercise/page-wrapper-exercise.component';
import { GhQLComponent } from './gh-ql/gh-ql.component';
import { TstComponent } from './tst/tst.component';

SideNavExerciseComponent.sidebarItems = [
  'GraphQL', 'Tst'
];

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'graphql' },
  { path: 'graphql', component: GhQLComponent },
  { path: 'tst', component: TstComponent },
  { path: '**', component: TstComponent },
];

@NgModule({
  declarations: [
    SideNavExerciseComponent,
    PageWrapperExerciseComponent,

    GhQLComponent,
    TstComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
  ],
  providers: [

  ],
})
export class VExerciseModule {
}
