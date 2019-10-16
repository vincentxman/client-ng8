import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { HeroComponent } from './hero/hero.component';
import { SideNavExerciseComponent } from './_wrapper/side-nav-exercise/side-nav-exercise.component';
import { PageWrapperExerciseComponent } from './_wrapper/page-wrapper-exercise/page-wrapper-exercise.component';
import { GhQLComponent } from './gh-ql/gh-ql.component';

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductComponent },
  { path: 'heroes', component: HeroComponent },
  { path: 'graphql', component: GhQLComponent },
  { path: '**', component: HeroComponent },
];

@NgModule({
  declarations: [
    ProductComponent,
    HeroComponent,
    SideNavExerciseComponent,
    PageWrapperExerciseComponent,
    GhQLComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductComponent,
    HeroComponent,
  ],
  providers: [

  ],
})
export class VExerciseModule {
}
