import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './pages/download/download.component';
import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { AlertComponent } from './components/alert/alert.component';
import { AccordionComponent } from './components/accordion/accordion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'getting-started', component: GettingStartedComponent},
  { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },
  { path: 'components/alert',  component: AlertComponent },
  { path: 'components/accordion',  component: AccordionComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
