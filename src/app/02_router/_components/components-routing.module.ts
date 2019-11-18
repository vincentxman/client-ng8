import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './_wrapper/side-nav/side-nav.component';
import { AlertComponent } from './alert/alert.component';
import { AccordionComponent } from './accordion/accordion.component';

SideNavComponent.sidebarItems = [
  'Accordion', 'Alert'
];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'alert' },
  { path: 'alert', component: AlertComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: '**', component: AccordionComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
