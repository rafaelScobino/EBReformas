import { Component } from '@angular/core';
import { text } from './landingpagetxt';

@Component({
    selector: 'app-landingpage',
    templateUrl: './landingpage.component.html',
    styleUrl: './landingpage.component.css',
    standalone: false
})
export class LandingpageComponent {

  text = text
  screenWidth = window.innerWidth;

  mobileCheck(){
  if (this.screenWidth < 800) {
    return true 
  } 
  return false
  }
 
}

