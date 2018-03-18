import { Injectable } from '@angular/core';
import { Hero } from './models/Hero';
import { HEROES } from './mock/heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable< Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetch hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}