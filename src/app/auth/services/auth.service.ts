import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_API } from 'src/app/config/api.config';
import { Credentials } from '../dto/credentials.dto';
import { LoginResonse } from '../dto/login-response.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  login(credentials: Credentials): Observable<LoginResonse> {
    // Todo: Appeler l'api avec les credentials et retourner un observable
    return this.http.post<LoginResonse>(APP_API.login, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
