import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AppOverviewSection } from './overview';

@Component({
  selector: 'app-overview-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // tslint:disable-next-line:object-literal-key-quotes
    'class': 'd-block'
  },
  template: `
    <h2>
      <a class="title-fragment" [routerLink]="" [fragment]="section.fragment" appFragment>
        <img src="img/link-symbol.svg" />
      </a>
      {{ section.title }}
    </h2>

    <ng-content></ng-content>
  `
})
export class AppOverviewSectionComponent {
  @Input() section: AppOverviewSection;
}
