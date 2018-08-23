import { Hero } from './../Hero';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {
   hero:Hero;
  constructor( private heroSrevice:HeroService,private route:ActivatedRoute) {

  }

  ngOnInit() {
       this.route.params.subscribe((params)=>{
             if(!!params.id){
                this.heroSrevice.getHeroById(params.id).subscribe((hero)=>{
                  this.hero=hero
                })  
             }
       })  
 
  }

}
