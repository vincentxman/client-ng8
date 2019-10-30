import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { AppOverviewSection } from 'src/_share/overview';
@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // tslint:disable-next-line:object-literal-key-quotes
    'class': 'd-block'
  },
  template: `
    <h4>
      <a [routerLink]="" [fragment]="fragment" appFragment>
        <img src="img/link-symbol.svg" />
      </a>
      <span class="badge badge-info">{{ title }}</span>
    </h4>
  `,
})
export class PageHeaderComponent implements AppOverviewSection {
  @Input() title: string;
  @Input() fragment: string;
}
