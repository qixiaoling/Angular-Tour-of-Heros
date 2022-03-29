import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  //template: `<h1>Hello</h1> `,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Big Boy';

  constructor() { }

  ngOnInit(): void {
  }

}
