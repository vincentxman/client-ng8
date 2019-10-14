import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'a[appFragment]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.title-fragment]': 'true',
    '[attr.id]': 'fragment'
  }
})
export class FragmentDirective {
  @Input() fragment: string;
}
