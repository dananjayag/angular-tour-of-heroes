import { HeroService } from './../hero.service';
import { Hero } from './../Hero';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent implements OnInit {

  topHeroes:Hero[];
  constructor( private heroSrevice:HeroService,private route:Router) {

  }

  viewHero(hero:Hero){
      this.route.navigate(['details',hero.id])
  }

  ngOnInit() {
    this.heroSrevice.getTopHeroes().subscribe((heroes:Hero[])=>{
          this.topHeroes=heroes
          console.log(this.topHeroes,heroes)
    })
  }

}
