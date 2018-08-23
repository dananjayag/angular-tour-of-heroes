import { Hero } from './../Hero';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {
  heroesList:Hero[];
  selectedHero:Hero;
  constructor(private heroService:HeroService,private route:Router) { }

  selectHero(hero:Hero){
    this.selectedHero=hero
  }
  viewDetails(id){
    this.route.navigate(['details',id])
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes)=>{this.heroesList=heroes})
  }

}
