import { NgModule } from '@angular/core';
import { BackstageWrapperComponent } from './_wrapper/backstage-wrapper.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BackstageRoutingModule } from './backstage-routing.module';
// import { IconsProviderModule } from '../../icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    BackstageWrapperComponent,
    WelcomeComponent
  ],
  imports: [
    BackstageRoutingModule,
    // IconsProviderModule,
    NgZorroAntdModule,
  ],
  exports: [
    // IconsProviderModule,
    NgZorroAntdModule,
  ]
})
export class BackstageModule { }
