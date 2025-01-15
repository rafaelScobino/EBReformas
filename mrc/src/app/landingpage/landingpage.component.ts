import { Component } from '@angular/core';
import { text } from './landingpagetxt';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

  text = text

}
