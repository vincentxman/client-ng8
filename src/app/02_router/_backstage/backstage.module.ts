import { NgModule } from '@angular/core';
import { BackstageWrapperComponent } from './_wrapper/backstage-wrapper.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BackstageRoutingModule } from './backstage-routing.module';
// import { IconsProviderModule } from '../../icons-provider.module';
import { NzMenuModule, NzIconModule, NzSliderModule, NzLayoutModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BackstageWrapperComponent,
    WelcomeComponent,
  ],
  imports: [
    BackstageRoutingModule,
    CommonModule,
    // IconsProviderModule,

    /** 导入 ng-zorro-antd 模块 **/
    // NgZorroAntdModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzSliderModule,
  ],
  exports: [
    // IconsProviderModule,
    // NgZorroAntdModule,
  ]
})
export class BackstageModule { }
