import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  // Elle va dire si un élément est caché ou pas
  isHidden = false;

  message = '';
  // constructor() {
  //   setInterval(() => {
  //     this.isHidden = !this.isHidden;
  //   }, 1500)
  // }

  showHide() {
    this.isHidden = !this.isHidden;
  }
  updateMessage(newMessage: string) {
    this.message = newMessage;
  }
}

// On parle de class c'est écrit en TS

// On a des attributs  => état de l'objet

// On a des méthodes => le comportement
