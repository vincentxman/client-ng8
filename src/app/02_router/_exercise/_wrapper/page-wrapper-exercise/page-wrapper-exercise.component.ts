import { Component, ContentChildren, Input, QueryList, NgZone } from '@angular/core';
import { PageHeaderComponent } from 'src/_share/wrapper/page-header/page-header.component';

@Component({
  selector: 'app-page-wrapper-exercise',
  templateUrl: './page-wrapper-exercise.component.html'
})
export class PageWrapperExerciseComponent {
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
