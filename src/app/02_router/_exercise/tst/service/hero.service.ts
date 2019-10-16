import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './messages.service';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/02_router/_exercise/tst/class/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'tst/heroes';  // URL to web tst

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

}
