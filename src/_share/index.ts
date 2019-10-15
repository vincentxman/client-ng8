import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CodeHighlightService } from './code/code-highlight.service';
import { VCodeComponent } from './code/code.component';
import { FragmentDirective } from './fragment/fragment.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppOverviewSectionComponent, AppOverviewDirective } from './overview';

@NgModule({
  declarations: [
    VCodeComponent,
    FragmentDirective,
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
    AppOverviewSectionComponent,
    AppOverviewDirective,
  ],
  providers: [CodeHighlightService],
})
export class VShareModule {
}
