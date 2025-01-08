import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape/rodape.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    RodapeComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavMenuComponent,
    RodapeComponent
  ]
})
export class SharedModule { }
