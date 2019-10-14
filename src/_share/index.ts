import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlightService } from './code/code-highlight.service';
import { VCodeComponent } from './code/code.component';

@NgModule({
  declarations: [VCodeComponent],
  imports: [CommonModule],
  exports: [VCodeComponent],
  providers: [CodeHighlightService],
})
export class VToolModule {
}
