import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output()
  selectCv = new EventEmitter<Cv>();

  onSelectCv(): void {
    this.selectCv.emit(this.cv);
  }
}
