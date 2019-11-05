import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { tap, catchError } from 'rxjs/operators';
import { dump } from '../../../../_share/utilities/tools';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsUrl = 'api/items';  // URL to web api
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('assets/config.json');
  }

  /** GET items from the server */
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(_ => this.log('fetched items')),
        catchError(this.handleError<Item[]>('getItems', []))
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    dump(message, 'ItemsService');
  }
}
