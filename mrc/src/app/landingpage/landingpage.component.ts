import { Component } from '@angular/core';
import { text } from './landingpagetxt';
import { ServicoCardComponent } from './servico-card/servico-card.component';

@Component({
    selector: 'app-landingpage',
    templateUrl: './landingpage.component.html',
    styleUrl: './landingpage.component.css',
    standalone: false
})
export class LandingpageComponent {

  text = text

}
