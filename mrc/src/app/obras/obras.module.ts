import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ObrasMainPageComponent } from './obras-main-page/obras-main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ObrasMainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ObrasModule { }
