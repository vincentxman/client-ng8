import { Directive, Input, HostBinding } from '@angular/core';

// 文章定位, 同一页加入许多 header 当锚 后可以使用 锚链接(anchor link) 快速调到 header
// <app-page-header title="Dependencies" fragment="dependencies" class="mt-0"></app-page-header>
@Directive({
  selector: 'a[appFragment]',
  host: {
    '[class.title-fragment]': 'true',
    '[attr.id]': 'fragment'
  }
})
export class FragmentDirective {
  @Input() fragment: string;
}
