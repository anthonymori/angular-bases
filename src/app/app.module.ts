import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { counterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HéroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    HéroesModule,
    DbzModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
