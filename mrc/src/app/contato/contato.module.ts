import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ContatoMainPageComponent } from './contato-main-page/contato-main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ContatoMainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContatoModule { }
