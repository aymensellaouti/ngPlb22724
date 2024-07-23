import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type="text"]',
})
export class RainbowDirective {
  // Deux choses :
  // Quels propriétés je veux manipuler
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {
    console.log('Rainbow');
  }

  // Quels événements je veux gérer
  @HostListener('keyup') onKeyUp() {
    // Changer aléatoirement la coueleur
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }
  /**
   * Elle retourne une couleur aléatoire
   */
  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
