import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComumModule } from './comum/comum.module';
import { RoupasComponent } from './roupas/roupas.component';


@NgModule({
  declarations: [
    AppComponent,
    RoupasComponent
  ],
  imports: [
    BrowserModule,
    ComumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
