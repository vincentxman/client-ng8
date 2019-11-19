import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavExerciseComponent } from './_wrapper/side-nav-exercise/side-nav-exercise.component';
import { PageWrapperExerciseComponent } from './_wrapper/page-wrapper-exercise/page-wrapper-exercise.component';
import { GhQLComponent } from './gh-codegen/gh-ql.component';
import { TstComponent } from './tst/tst.component';
import { CountryComponent } from './country/country.component';
import { SortableHeaderDirective } from '../../../_share/directive/sortable.directive';
import { NgbdTableCompleteComponent } from './country/table-complete/table-complete.component';
import { FormsModule } from '@angular/forms';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { VShareModule } from 'src/_share';
import { CountryLazyServiceModule } from './country/country.lazy.service.module';
import { GhCatComponent } from './gh-test/gh-cat.component';
import { GhQlLazyModule } from './gh-codegen/gh-ql-lazy.module';
import { ItemsComponent } from './items/items.component';
import { MarkdownTestComponent } from './markdown-test/markdown-test.component';
import { MarkdownModule } from 'ngx-markdown';
import { dump } from '../../../_share/utilities/tools';
import { MyChildRouterTestComponent } from './my-child-router-test/my-child-router-test.component';
import { ChildAComponent } from './my-child-router-test/child-a/child-a.component';
import { ChildBComponent } from './my-child-router-test/child-b/child-b.component';
import { MyChildAuxRouterTestComponent } from './my-child-aux-router-test/my-child-aux-router-test.component';
import { ChatComponent } from './my-child-aux-router-test/chat/chat.component';
import { MyLazyModule } from './_service/my-lazy.module';


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
    ItemsComponent,
    MarkdownTestComponent,
    MyChildRouterTestComponent,
    ChildAComponent,
    ChildBComponent,
    MyChildAuxRouterTestComponent,
    ChatComponent,
    MyToastsContainerComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    VShareModule,
    ExerciseRoutingModule,
    CountryLazyServiceModule,
    GhQlLazyModule,
    MyLazyModule,
    MarkdownModule.forChild(),
  ],
  exports: [
  ],
  providers: [

  ],
})
export class VExerciseModule {
  constructor() {
    dump('VExerciseModule');
  }
}
