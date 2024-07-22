import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input()
  messageDeMonPapa = 'cc mon flis :D';

  // Créer un event personnalisé
  @Output()
  sendMessageToPapa = new EventEmitter<string>()

  emitMessage() {
    this.sendMessageToPapa.emit('cc Papa :D');
  }
}
