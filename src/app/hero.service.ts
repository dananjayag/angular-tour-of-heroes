import { Hero } from './Hero';
import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable,of} from 'rxjs'

const HeroData:Hero[]=[{
  id:1,
  name:'Arun',
  age:20
},
{
  id:2,
  name:'Akshata',
  age:22
},
{
  id:3,
  name:'Basvaraj',
  age:25
},
{
  id:4,
  name:'Chethan',
  age:29
},
{
  id:5,
  name:'Dhananjay',
  age:16
},
{
  id:6,
  name:'Kiran',
  age:44
}]
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesBehavior=new BehaviorSubject<Hero[]>(HeroData);
  hero=new BehaviorSubject<Hero>();
  topHeroes=new BehaviorSubject<Hero[]>();
  constructor() { }
  getHeroes ():Observable<Hero[]>{
    this.heroesBehavior.next(HeroData);
    return this.heroesBehavior.asObservable()
  }
  getHeroById (id:number): Observable<Hero>{
    let data=this.heroesBehavior.getValue().filter((hero:Hero)=>{
      return hero.id == id
    }).slice(0,1)

    this.hero.next(data.length >0 && data[0]);
    return this.hero.asObservable()
  }
  getTopHeroes():Observable<Hero[]>{
    let data=this.heroesBehavior.getValue().slice(0,5)

    this.topHeroes.next(data);
    return this.topHeroes.asObservable()

  }
}
