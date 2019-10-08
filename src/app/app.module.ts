import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './pages/_others/header/header.component';
import { FooterComponent } from './pages/_others/footer/footer.component';
import { IconsComponent } from './shared/icons/icons.component';

import { HomeComponent } from './pages/home/home.component';
import { DownloadComponent } from './pages/download/download.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { PageWrapperComponent } from './shared/page-wrapper/page-wrapper.component';
import { ParentComponent } from './t/parent/parent.component';
import { ChildComponent } from './t/child/child.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { FragmentDirective } from './shared/fragment.directive';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
    ChildComponent,
    SideNavComponent,
    AccordionComponent,
    AlertComponent,
    PageHeaderComponent,
    FragmentDirective
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
