import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
const routes:Routes=[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:HeroesDashboardComponent},
  {path:'details/:id',component:HeroesDetailsComponent},
  {path:'list',component:ListHeroesComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
