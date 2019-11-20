import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DownloadComponent } from './02_router/download/download.component';
import { HomeComponent } from './02_router/home/home.component';
import { GettingStartedComponent } from './02_router/getting-started/getting-started.component';
import { RegisterComponent } from './02_router/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'components', loadChildren: './02_router/_components/components.module#VComponentsModule' }, // 懒加载
  { path: 'exercise', loadChildren: './02_router/_exercise/exercise.module#VExerciseModule' }, // 懒加载
  { path: 'backstage', loadChildren: './02_router/_backstage/backstage.module#BackstageModule' }, // 懒加载
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
