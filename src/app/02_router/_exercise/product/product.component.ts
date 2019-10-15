import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource: Observable<any>;
  products: Array<any> = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onClick() {
    console.log('onclick....');
    this.productService.getProducts()
      .subscribe(products => console.log(products));
  }
}
