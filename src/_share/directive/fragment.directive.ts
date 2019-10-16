import { Directive, Input, HostBinding } from '@angular/core';
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
