import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

// TODO InMemoryDataService
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

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

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

    // TODO InMemoryDataService
    environment.isMemoDB ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) : [],
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // URL 使用 #
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

