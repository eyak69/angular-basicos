import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { UtilesModule } from './utiles/utiles.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    UtilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
