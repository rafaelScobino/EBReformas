import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ServicoCardComponent } from './landingpage/servico-card/servico-card.component';
;


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ServicoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
