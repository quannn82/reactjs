import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  valueDemo = 'Name of Hero';
  badCurly = false;
  isSpecial = false;

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  changeValue(): void {console.log(33);
    this.valueDemo = (this.valueDemo == 'Change') ? 'Name of Hero' : 'Change';
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

  getListHero(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  deleteHero(hero: Hero): void {
    let objFind = {};
    this.heroes = this.heroes.filter(h => h.id != hero.id);
    this.selectedHero = this.heroes[0];
    this.heroService.deleteHero(hero).subscribe();
  }

  handleHero(hero: Hero): void {
    this.selectedHero = hero;
  }

}
