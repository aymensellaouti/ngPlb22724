import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login() {
    // Todo: Appeler le service avec les credentials
    // En cas de success => token on le met dans le localStorage, puis on redirige le user vers la liste des cvs
    // En cas d'erreur => Affiche toast d'erreur
  }
}
