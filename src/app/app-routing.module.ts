import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './02_router/download/download.component';
import { HomeComponent } from './02_router/home/home.component';
import { GettingStartedComponent } from './02_router/_getting-started/getting-started/getting-started.component';
import { AlertComponent } from './02_router/_components/alert/alert.component';
import { AccordionComponent } from './02_router/_components/accordion/accordion.component';
import { ExerciseComponent } from './02_router/_exercise/exercise/exercise.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'exercise', component: ExerciseComponent },
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
