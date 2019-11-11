import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { tap, catchError, map } from 'rxjs/operators';
import { dump } from '../../../../_share/utilities/tools';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsUrl = 'api/items';  // URL to web api
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('config.json');
  }

  /** POST: add a new Item to the server */
  item_create(newItem: Item): Observable<Item> {
    const now = Date.now();
    return this.http.post<Item>(this.itemsUrl, newItem, httpOptions)
      .pipe(
        tap((item: Item) => this.log(`item_create _id=${item._id}/${Date.now() - now}ms`)),
        catchError(this.handleError<Item>('item_create'))
      );
  }

  /** GET items from the server */
  item_getSome(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(_ => this.log('item_getSome items')),
        catchError(this.handleError<Item[]>('item_getSome', []))
      );
  }

  /** GET item by id. Will 404 if id not found */
  item_get(id: string): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`item_get id=${id}`)),
      catchError(this.handleError<Item>(`item_get id=${id}`))
    );
  }


  /** DELETE: delete the item from the server */
  item_delete(item: Item | string): Observable<Item> {
    const id = typeof item === 'string' ? item : item._id;
    const url = `${this.itemsUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted item id=${id}`)),
      catchError(this.handleError<Item>('item_delete'))
    );
  }

  /** PUT: update the item on the server */
  item_update(item: Item): Observable<Item> {
    const url = `${this.itemsUrl}/${item._id}`;
    return this.http.put(url, item, httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item._id}`)),
      catchError(this.handleError<any>('item_update'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ItemService message with the MessageService */
  private log(message: string) {
    dump(message, 'ItemsService');
  }
}
