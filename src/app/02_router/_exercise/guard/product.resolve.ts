import { Product } from '../tst/class/product';
import { Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {
  }
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot)
    : Product | import("rxjs").Observable<Product> | Promise<Product> {

    const productId: number = route.params["id"];
    if (productId === 1) {
      return { id: 1, name: "iPhone7", price: 25 } as Product;
    } else {
      this.router.navigate(['./']);
      return undefined;
    }

  }

}
