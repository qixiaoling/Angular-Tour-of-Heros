import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heros";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  //template: `<h1>Hello</h1> `,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;


  constructor(private heroSerivce: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  getHeroes(): void {
    // this.heroes = this.heroSerivce.getHeroes();
    this.heroSerivce.getHeroes()
      .subscribe(x => {
        console.log(x);
        this.heroes = x;
      })
  }


}
