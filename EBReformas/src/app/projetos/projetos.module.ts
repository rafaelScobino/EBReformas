import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjetosMainPageComponent } from './projetos-main-page/projetos-main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ProjetosMainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports
})
export class ProjetosModule { }
