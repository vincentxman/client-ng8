import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbdOverviewSection } from 'src/_share/overview/overview';

@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-header.component.html',
  host: {
    'class': 'd-block'
  },
})
export class PageHeaderComponent implements NgbdOverviewSection {
  @Input() title: string;
  @Input() fragment: string;

}

