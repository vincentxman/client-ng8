import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TopmenuComponent } from './pages/_others/topmenu/topmenu.component';
import { FooterComponent } from './pages/_others/footer/footer.component';
import { IconsComponent } from './shared/icons/icons.component';

import { HomeComponent } from './pages/home/home.component';
import { DownloadComponent } from './pages/download/download.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    TopmenuComponent,
    FooterComponent,
    IconsComponent,
    GettingStartedComponent
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
