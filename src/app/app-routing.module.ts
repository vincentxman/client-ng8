import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DownloadComponent } from './02_router/download/download.component';
import { HomeComponent } from './02_router/home/home.component';
import { GettingStartedComponent } from './02_router/getting-started/getting-started.component';

import {ROUTES as EXERCISE_ROUTES} from './02_router/_exercise/exercise.module';
import {ROUTES as COMPONENTS_ROUTES} from './02_router/_components/components.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'components', children: COMPONENTS_ROUTES},
  { path: 'exercise', children: EXERCISE_ROUTES },
  { path: '**', redirectTo: 'home' }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
