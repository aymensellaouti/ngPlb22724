import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // état de mon composant
  @Input({
    required: true
  })
  cv!: Cv;
}
