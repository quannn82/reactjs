import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    //this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
     this.heroService.updateHero(this.hero)
       .subscribe(() => this.goBack());
   }

   remove(): void {
     this.deleteRequest.emit(this.hero);
      // this.heroService.deleteHero(this.hero)
      //   .subscribe(() => this.goBack());
   }

  goBack(): void {
    this.location.back();
  }

}
