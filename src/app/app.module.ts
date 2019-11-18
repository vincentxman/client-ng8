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
    tables: false,
    breaks: false,
    pedantic: false,
    sanitize: false,
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    HeaderComponent,
    FooterComponent,
    GettingStartedComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    GraphqlModule,
    HttpClientModule,
    VShareModule,
    VComponentsModule,
    FormsModule,

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

  // URL 使用 #
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
    { provide: NZ_I18N, useValue: zh_CN },
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    dump('AppModule');
  }
 }

