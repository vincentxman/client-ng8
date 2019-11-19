import { CanActivate } from '@angular/router';
import { dump } from '../../../../_share/utilities/tools';
import { Injectable } from '@angular/core';
import { ExerciseToastService } from '../_service/my-toasts.service';

@Injectable() // 必须使用 @Injectable() 才能依赖注入Service
export class MyLoginGuard implements CanActivate {
  constructor(private toastService: ExerciseToastService) {
  }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    this.toastService.show('MyLoginGuard: 用户登录成功', { classname: 'bg-success text-light', delay: 2000 });
    dump('用户登录成功', 'MyLoginGuard');
    return true;
  }
}
