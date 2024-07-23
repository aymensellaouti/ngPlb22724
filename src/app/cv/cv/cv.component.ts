import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
  // Crée la liste des cvs
  cvs: Cv[] = [
    new Cv(
      1,
      'lepauvre',
      'Martial',
      'Dev',
      '123',
      22,
      '    '
    ),
    new Cv(2, 'codet', 'Marie', 'Dev', '1234', 20, 'rotating_card_profile.png'),
  ];

  selectedCv: Cv | null = null;

  onForwardCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
