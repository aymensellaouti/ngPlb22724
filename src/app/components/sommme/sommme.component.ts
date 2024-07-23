import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sommme',
  templateUrl: './sommme.component.html',
  styleUrls: ['./sommme.component.css'],
})
export class SommmeComponent {
  @Input()
  x = 0;
  @Input()
  y = 0;
  constructor() {}
  somme(a = 0, b = 0): number {
    return a + b;
  }
}
