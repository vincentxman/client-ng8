import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { TopmenuComponent } from './compoinents/core/topmenu/topmenu.component';
import { FooterComponent } from './compoinents/core/footer/footer.component';
import { IconsComponent } from './shared/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    TopmenuComponent,
    FooterComponent,
    IconsComponent
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
