import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { HeroComponent } from './hero/hero.component';

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductComponent },
  { path: 'heroes', component: HeroComponent },
  { path: '**', component: HeroComponent },
];

@NgModule({
  declarations: [
    ProductComponent,
    HeroComponent,
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
