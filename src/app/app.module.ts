import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

// InMemoryDataService
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './01_header/header.component';
import { FooterComponent } from './03_footer/footer.component';

import { HomeComponent } from './02_router/home/home.component';
import { DownloadComponent } from './02_router/download/download.component';
import { GettingStartedComponent } from './02_router/getting-started/getting-started.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { VShareModule } from 'src/_share';
import { VComponentsModule } from './02_router/_components/components.module';
import { GraphqlModule } from './graphql.module';

/** Markdown **/
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
export function markedOptions(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer: renderer,
    gfm: true,
    // tables: false,
    breaks: false,
    pedantic: false,
    // sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

/** 配置 angular i18n **/
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { dump } from '../_share/utilities/tools';
import { IconsProviderModule } from './icons-provider.module';


@NgModule({

  // declarations: 声明本模块中拥有的视图类。
  // Angular 有三种视图类：组件(Component)、指令(Directive)和管道(Pipe)。
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    HeaderComponent,
    FooterComponent,
    GettingStartedComponent,
  ],

  // exports: declarations 的子集，可用于其它模块的组件模板。
  exports: [
  ],

  // imports 本模块声明的组件模板需要的类所在的其它模块。
  // (类似调用 include *.h + 库)（这里的 Module 类似程序库）
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    GraphqlModule,
    HttpClientModule,
    VShareModule,
    VComponentsModule,
    FormsModule,
    IconsProviderModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptions,
      },
    }),
    // InMemoryDataService
    environment.isMemoDB ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) : [],
  ],

  // providers 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
  // URL 使用 #
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
    { provide: NZ_I18N, useValue: zh_CN },
  ],

  // bootstrap 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置 bootstrap 属性。
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() {
    dump('AppModule');
  }
}

