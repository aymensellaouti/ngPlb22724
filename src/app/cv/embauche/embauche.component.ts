import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';


@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent {
  public embauchees: Cv[] = [];
  embaucheService = inject(EmbaucheService);

  constructor() {this.embauchees = this.embaucheService.getEmbauchees();}
}
