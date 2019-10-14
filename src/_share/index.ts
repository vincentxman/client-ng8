import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CodeHighlightService } from './code/code-highlight.service';
import { VCodeComponent } from './code/code.component';
import { FragmentDirective } from './fragment/fragment.directive';
import { SideNavComponent } from './wrapper/side-nav/side-nav.component';

@NgModule({
  declarations: [
    VCodeComponent,
    FragmentDirective,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    VCodeComponent,
    FragmentDirective,
    SideNavComponent,
  ],
  providers: [CodeHighlightService],
})
export class VToolModule {
}
