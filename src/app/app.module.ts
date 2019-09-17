import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './pages/_others/header/header.component';
import { FooterComponent } from './pages/_others/footer/footer.component';
import { IconsComponent } from './shared/icons/icons.component';

import { HomeComponent } from './pages/home/home.component';
import { DownloadComponent } from './pages/download/download.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { PageWrapperComponent } from './shared/page-wrapper/page-wrapper.component';
import { ParentComponent } from './t/parent/parent.component';
import { ChildComponent } from './t/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    HeaderComponent,
    FooterComponent,
    IconsComponent,
    GettingStartedComponent,
    PageWrapperComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
