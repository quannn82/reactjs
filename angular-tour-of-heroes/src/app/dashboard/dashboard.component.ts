import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  listClass = {'abc': true, 'hdj': false};
  fontSizePx = 15;
  currentHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(0, 5);
        this.currentHero = heroes[0];
      });
  }

  changeSize(data) : void {
    console.log(data);
    this.fontSizePx = data;
  }

  deleteOneHero(data): void {

    let objFind = {};
    this.heroes = this.heroes.filter(h => h.id != data.id);
    this.currentHero = this.heroes[0];
    this.heroService.deleteHero(data).subscribe();
  }
}
