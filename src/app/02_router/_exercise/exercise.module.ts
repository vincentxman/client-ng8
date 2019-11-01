import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavExerciseComponent } from './_wrapper/side-nav-exercise/side-nav-exercise.component';
import { PageWrapperExerciseComponent } from './_wrapper/page-wrapper-exercise/page-wrapper-exercise.component';
import { GhQLComponent } from './gh-ql/gh-ql.component';
import { TstComponent } from './tst/tst.component';
import { CountryComponent } from './country/country.component';
import { SortableHeaderDirective } from '../../../_share/directive/sortable.directive';
import { NgbdTableCompleteComponent } from './country/table-complete/table-complete.component';
import { FormsModule } from '@angular/forms';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { VShareModule } from 'src/_share';
import { CountryLazyServiceModule } from './country/country.lazy.service.module';
import { GhCatComponent } from './gh-cat/gh-cat.component';
import { GhQlLazyModule } from './gh-ql/gh-ql-lazy.module';

@NgModule({
  declarations: [
    SideNavExerciseComponent,
    PageWrapperExerciseComponent,

    GhQLComponent,
    TstComponent,
    CountryComponent,
    SortableHeaderDirective,

    NgbdTableCompleteComponent,

    GhCatComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    VShareModule,
    ExerciseRoutingModule,
    CountryLazyServiceModule,
    GhQlLazyModule,
  ],
  exports: [
  ],
  providers: [

  ],
})
export class VExerciseModule {
  // { path: 'exercise', loadChildren: './02_router/_exercise/exercise.module#VExerciseModule' }, // 懒加载
}
