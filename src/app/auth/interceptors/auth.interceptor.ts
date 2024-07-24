import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authService = inject(AuthService);
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('In interceptor');

    const headers = new HttpHeaders().set(
      'authorization',
      localStorage.getItem('token') ?? ''
    );
    if (this.authService.isAuthenticated()) {
      const reqClone = request.clone({ headers});
      return next.handle(reqClone);
    }
    // Todo: Si on est authentifié, il faudra créer un clone de notre request http et
    // y injecter le token via les http params ou les http headers
    // ensuite retourner la request cloné

    //Sinon on laisse la requete passé
    return next.handle(request);
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
