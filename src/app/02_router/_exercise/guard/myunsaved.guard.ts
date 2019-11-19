import { CanDeactivate } from '@angular/router';
import { MarkdownTestComponent } from '../markdown-test/markdown-test.component';
import { dump } from '../../../../_share/utilities/tools';
import { Injectable } from '@angular/core';
import { ExerciseToastService } from '../_service/my-toasts.service';

@Injectable() // 必须使用 @Injectable() 才能依赖注入Service
export class MyUnsavedGuard implements CanDeactivate<MarkdownTestComponent> {
  constructor(private toastService: ExerciseToastService) {
  }

  canDeactivate(
    component: MarkdownTestComponent,
    currentRoute: import("@angular/router").ActivatedRouteSnapshot,
    currentState: import("@angular/router").RouterStateSnapshot,
    nextState?: import("@angular/router").RouterStateSnapshot)
    : boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> |
    Promise<boolean | import("@angular/router").UrlTree> {

    if (true) {
      this.toastService.show('MyUnsavedGuard: 已经保存可以离开', { classname: 'bg-success text-light', delay: 2000 });
      return true;
    } else {
      this.toastService.show('MyUnsavedGuard: 未保存，请先保存', { classname: 'bg-danger text-light', delay: 2000 });
      return false;
    }
  }
}
