import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  // état de mon composant
  @Input({
    required: true,
  })
  cv!: Cv;
  @Input()
  size = 50;
  cvService = inject(CvService);

  // @Output()
  // selectCv = new EventEmitter<Cv>();

  onSelectCv(): void {
    this.cvService.selectCv(this.cv);
    // console.log(this.cv);

    // this.selectCv.emit(this.cv);
  }
}
