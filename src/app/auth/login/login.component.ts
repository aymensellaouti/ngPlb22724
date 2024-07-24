import { Component, inject } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  login(credentials: Credentials) {
    // Todo: Appeler le service avec les credentials
    this.authService.login(credentials).subscribe({
      next: (reponse) => {
        // En cas de success => token on le met dans le localStorage, puis on redirige le user vers la liste des cvs
        localStorage.setItem('token', reponse.id);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (err) => {
        // En cas d'erreur => Affiche toast d'erreur
        this.toastr.error(`Veuillez vérifier vos credentials !!`);
      },
    });
  }
}
