import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'svg[ngbdIcon]',
  templateUrl: './icons.component.html',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    '[attr.width]': 'width',
    '[attr.height]': 'height',
  }
})
export class IconsComponent {
  @Input() ngbdIcon: string;
  @Input() width = '24';
  @Input() height = '24';
}
