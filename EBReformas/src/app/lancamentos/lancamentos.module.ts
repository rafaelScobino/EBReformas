import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { LancamentosMainPageComponent } from './lancamentos-main-page/lancamentos-main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    LancamentosMainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LancamentosModule { }
