import { CanDeactivate } from '@angular/router';
import { MarkdownTestComponent } from '../markdown-test/markdown-test.component';
import { dump } from '../../../../_share/utilities/tools';

export class MyUnsavedGuard implements CanDeactivate<MarkdownTestComponent> {
  canDeactivate(
    component: MarkdownTestComponent,
    currentRoute: import("@angular/router").ActivatedRouteSnapshot,
    currentState: import("@angular/router").RouterStateSnapshot,
    nextState?: import("@angular/router").RouterStateSnapshot)
    : boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> |
    Promise<boolean | import("@angular/router").UrlTree> {
    if (true) {
      dump('已经保存可以离开', 'MyUnsavedGuard');
      return true;
    } else {
      dump('未保存，请先保存', 'MyUnsavedGuard');
      return false;
    }
  }
}
