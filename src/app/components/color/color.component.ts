import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {

  #defaultColor = 'red';

  // propriété d'état qui va représenter la couleur du background de la DIV
  color = 'red';

  /**
   * @param {string} newColor
   *
   * la nouvelle couleur
   */
  changeColor(newColor: string): void {
    this.color = newColor;
  }

  reset() {
    this.color = this.#defaultColor;
  }
}
