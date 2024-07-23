import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logger(data: unknown): void {
    console.log('Je suis le logger');
    console.log(data);
  }
}
