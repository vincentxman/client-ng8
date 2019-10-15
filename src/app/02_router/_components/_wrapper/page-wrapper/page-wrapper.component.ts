import { Component, Input, NgZone, ContentChildren, QueryList } from '@angular/core';
import { PageHeaderComponent } from '../../../../../_share/wrapper/page-header/page-header.component';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html'
})
export class PageWrapperComponent {
  @Input() pageTitle: string;
  @ContentChildren(PageHeaderComponent) private mtableOfContents: QueryList<PageHeaderComponent>;

  isLargeScreenOrLess: boolean;
  sidebarCollapsed = true;

  constructor(ngZone: NgZone) {
    const largeScreenQL = matchMedia('(max-width: 1199.98px)');
    this.isLargeScreenOrLess = largeScreenQL.matches;
    // tslint:disable-next-line: deprecation
    largeScreenQL.addListener((event) => ngZone.run(() => this.isLargeScreenOrLess = event.matches));
  }

  get tableOfContents() {
    return this.mtableOfContents ? this.mtableOfContents.toArray() : [];
  }
}
