import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

// TODO InMemoryDataService
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './02_router/_exercise/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './01_header/header.component';
import { FooterComponent } from './03_footer/footer.component';
import { IconsComponent } from './shared/icons/icons.component';

import { HomeComponent } from './02_router/home/home.component';
import { DownloadComponent } from './02_router/download/download.component';
import { GettingStartedComponent } from './02_router/_getting-started/getting-started/getting-started.component';
import { PageWrapperComponent } from './02_router/_getting-started/page-wrapper/page-wrapper.component';
import { SideNavComponent } from './02_router/_getting-started/side-nav/side-nav.component';
import { AccordionComponent } from './02_router/_components/accordion/accordion.component';
import { AlertComponent } from './02_router/_components/alert/alert.component';
import { PageHeaderComponent } from './02_router/_getting-started/page-header/page-header.component';
import { FragmentDirective } from './shared/fragment.directive';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ProductComponent } from './02_router/_exercise/product/product.component';
import { HeroComponent } from './02_router/_exercise/hero/hero.component';
import { ExerciseComponent } from './02_router/_exercise/exercise/exercise.component';
import { VToolModule } from 'src/_tools';

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
    SideNavComponent,
    AccordionComponent,
    AlertComponent,
    PageHeaderComponent,
    FragmentDirective,
    ProductComponent,
    HeroComponent,
    ExerciseComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VToolModule,

    // TODO InMemoryDataService
    environment.isMemoDB ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) : []
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

