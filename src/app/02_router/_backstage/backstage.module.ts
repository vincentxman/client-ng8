import { NgModule } from '@angular/core';
import { BackstageWrapperComponent } from './_wrapper/backstage-wrapper.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BackstageRoutingModule } from './backstage-routing.module';
// import { IconsProviderModule } from '../../icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { dump } from '../../../_share/utilities/tools';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    BackstageWrapperComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BackstageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // IconsProviderModule,

    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    // NzFormModule,
    // NzCardModule,
    // NzLayoutModule,
    // NzInputModule,
    // NzIconModule,
    // NzMenuModule,
    // NzSliderModule,
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
