import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CodeHighlightService } from './code/code-highlight.service';
import { VCodeComponent } from './code/code.component';
import { FragmentDirective } from './fragment/fragment.directive';
import { SideNavComponent } from './wrapper/side-nav/side-nav.component';
import { PageHeaderComponent } from './wrapper/page-header/page-header.component';
import { PageWrapperComponent } from './wrapper/page-wrapper/page-wrapper.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppOverviewSectionComponent, AppOverviewDirective } from './overview';

@NgModule({
  declarations: [
    VCodeComponent,
    FragmentDirective,
    SideNavComponent,
    PageHeaderComponent,
    PageWrapperComponent,
    AppOverviewSectionComponent,
    AppOverviewDirective,
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    VCodeComponent,
    FragmentDirective,
    SideNavComponent,
    PageHeaderComponent,
    PageWrapperComponent,
    AppOverviewSectionComponent,
    AppOverviewDirective,
  ],
  providers: [CodeHighlightService],
})
export class VShareModule {
}
