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
import { IconsComponent } from '../_share/icons/icons.component';

import { HomeComponent } from './02_router/home/home.component';
import { DownloadComponent } from './02_router/download/download.component';
import { GettingStartedComponent } from './02_router/getting-started/getting-started.component';
import { AccordionComponent } from './02_router/_components/accordion/accordion.component';
import { AlertComponent } from './02_router/_components/alert/alert.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ExerciseComponent } from './02_router/_exercise/exercise/exercise.component';
import { VShareModule } from 'src/_share';
import { ExSideNavComponent } from './02_router/_exercise/_wrapper/ex-side-nav/ex-side-nav.component';
import { VExerciseModule } from './02_router/_exercise/exercise.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    HeaderComponent,
    FooterComponent,
    IconsComponent,
    GettingStartedComponent,
    AccordionComponent,
    AlertComponent,
    ExerciseComponent,
    ExSideNavComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VShareModule,

    // TODO InMemoryDataService
    environment.isMemoDB ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) : [],
    VExerciseModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

