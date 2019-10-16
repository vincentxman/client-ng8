import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './messages.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/02_router/_exercise/tst/class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private heroesUrl = 'tst/products';  // URL to web tst

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.heroesUrl);
  }

}
