import { Injectable } from '@angular/core';
import {Hero} from './hero';
//THIS IS THE INTERFACE TYPE
import {HEROES} from "./mock-heros";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
//THIS IS MOCK



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('The HeroService Fetched the Heroes.');
    return heroes;
  }

}
