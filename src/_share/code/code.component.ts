import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { ISnippet } from './snippet';
import { CodeHighlightService } from './code-highlight.service';

@Component({
  selector: 'app-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <pre class="language-{{ snippet.lang }}"><code #code class="language-{{ snippet.lang }}"></code></pre>
  `
})
export class VCodeComponent implements AfterViewInit {

  @ViewChild('code', { static: true }) codeEl: ElementRef<HTMLElement>;

  @Input() snippet: ISnippet;

  constructor(private service: CodeHighlightService) {}

  ngAfterViewInit() {
    this.codeEl.nativeElement.innerHTML = this.service.highlight(this.snippet.code, this.snippet.lang);
  }
}
