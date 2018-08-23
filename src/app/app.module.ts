import { HeroService } from './hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListHeroesComponent,
    HeroesDetailsComponent,
    HeroesDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
