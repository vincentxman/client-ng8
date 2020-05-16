import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DownloadComponent } from './02_router/download/download.component';
import { HomeComponent } from './02_router/home/home.component';
import { GettingStartedComponent } from './02_router/getting-started/getting-started.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'components', loadChildren: () => import('./02_router/_components/components.module').then(m => m.VComponentsModule)}, // 懒加载
  { path: 'exercise', loadChildren: () => import('./02_router/_exercise/exercise.module').then(m => m.VExerciseModule)}, // 懒加载
  { path: 'backstage', loadChildren: () => import('./02_router/_backstage/backstage.module').then(m => m.BackstageModule)}, // 懒加载
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
