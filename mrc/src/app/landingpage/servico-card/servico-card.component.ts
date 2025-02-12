import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servico-card',
  templateUrl: './servico-card.component.html',
  styleUrl: './servico-card.component.css'
})
export class ServicoCardComponent {
@Input()titulo: string = '';
@Input()cardImgUrl: string = '';
@Input()cardContent: string='';

constructor(){

}

}
