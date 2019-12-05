import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoginComponent } from './login-1/login/login.component';
import { Login2Component } from './login-2/_pageOld/login';
import { Login3Component } from './login-2/login/login.component';

import { RegisterComponent } from './login-1/register/register.component';
import { Register2Component } from './login-2/_pageOld/register';
import { Register3Component } from './login-2/register/register.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },

  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'login3', component: Login3Component },

  { path: 'register', component: RegisterComponent },
  { path: 'register2', component: Register2Component },
  { path: 'register3', component: Register3Component },

  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackstageRoutingModule { }
