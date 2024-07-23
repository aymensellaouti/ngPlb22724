import { Component } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css']
})
export class LampeComponent {
  /**
   * Permet de définir si la lampe est
   * éteinte ou allumée
   */
  isOff = true;

  /**
   * Permet d'allumer ou d'eteindre la lampe
   */
  interrupteur() {
    this.isOff = !this.isOff;
  }
}
