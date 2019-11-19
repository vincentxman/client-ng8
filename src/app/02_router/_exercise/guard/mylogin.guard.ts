import { CanActivate } from '@angular/router';
import { dump } from '../../../../_share/utilities/tools';

export { CanActivate } from "@angular/router"

export class MyLoginGuard implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    // const loggedIn: boolean = Math.random() < 0.5;
    // if (!loggedIn) {
    //   dump(`用户登录失败 loggedIn=${loggedIn}`);
    // }
    // return loggedIn;
    dump('用户登录成功', 'MyLoginGuard');
    return true;
  }
}
