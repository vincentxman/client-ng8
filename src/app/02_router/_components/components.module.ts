import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SideNavComponent } from './_wrapper/side-nav/side-nav.component';
import { PageWrapperComponent } from './_wrapper/page-wrapper/page-wrapper.component';
import { VShareModule } from 'src/_share';
import { ComponentsRoutingModule } from './components-routing.module';


@NgModule({
  declarations: [
    SideNavComponent,
    PageWrapperComponent,

    AccordionComponent,
    AlertComponent,
  ],
  imports: [
    ComponentsRoutingModule,
    NgbModule,
    CommonModule,
    VShareModule,
  ],
  exports: [
    PageWrapperComponent
  ],
  providers: [

  ],
})
export class VComponentsModule {
}
