import { NgModule } from '@angular/core';
import { BackstageWrapperComponent } from './_wrapper/backstage-wrapper.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BackstageRoutingModule } from './backstage-routing.module';
// import { IconsProviderModule } from '../../icons-provider.module';
import { NgZorroAntdModule, NzLayoutModule, NzMenuModule, NzSliderModule, NzFormModule, NzCardModule, NzInputModule, NzIconModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { dump } from '../../../_share/utilities/tools';
import { RegisterComponent } from './login-1/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login-1/login/login.component';
import { Register2Component } from './login-2/register';
import { BackstageLazyModule } from './backstage-lazy/backstage-lazy.module';

@NgModule({
  declarations: [
    BackstageWrapperComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    Register2Component,
  ],
  imports: [
    BackstageLazyModule,
    BackstageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // IconsProviderModule,

    /** 导入 ng-zorro-antd 模块 **/
    // NgZorroAntdModule,
    NzLayoutModule,
    NzSliderModule,
    NzMenuModule,
    NzFormModule,
    NzCardModule,
    NzInputModule,
    NzIconModule,
  ],
  exports: [
    // IconsProviderModule,
    // NgZorroAntdModule,
  ]
})
export class BackstageModule {
  constructor() {
    dump('BackstageModule');
  }
 }
