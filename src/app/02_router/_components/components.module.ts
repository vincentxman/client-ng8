import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SideNavComponent } from './_wrapper/side-nav/side-nav.component';
import { PageWrapperComponent } from './_wrapper/page-wrapper/page-wrapper.component';

SideNavComponent.sidebarItems = [
  'Accordion', 'Alert'
];

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'alert' },
  { path: 'alert', component: AlertComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: '**', component: AccordionComponent },
];

@NgModule({
  declarations: [
    SideNavComponent,
    PageWrapperComponent,

    AccordionComponent,
    AlertComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    PageWrapperComponent
  ],
  providers: [

  ],
})
export class VComponentsModule {
}
