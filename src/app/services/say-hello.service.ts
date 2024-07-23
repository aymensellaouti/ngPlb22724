import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class SayHelloService {
  loggerService =  inject(LoggerService);

  hello() {
    this.loggerService.logger('hello');
  }
}
