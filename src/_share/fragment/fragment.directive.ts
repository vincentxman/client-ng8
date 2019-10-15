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

  // @HostBinding('class.title-fragment') titleFragment = true;
  // @HostBinding('attr.id') id = this.fragment;
}
