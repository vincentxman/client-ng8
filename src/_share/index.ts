import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlightService } from './code/code-highlight.service';
import { VCodeComponent } from './code/code.component';
import { FragmentDirective } from './fragment/fragment.directive';

@NgModule({
  declarations: [
    VCodeComponent,
    FragmentDirective,
  ],
  imports: [CommonModule],
  exports: [
    VCodeComponent,
    FragmentDirective
  ],
  providers: [CodeHighlightService],
})
export class VToolModule {
}
