import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers:  []
})
export class CvComponent {
  today = new Date();
  // Todo : Migrer la création de la liste vers un cvService
  //Crée la liste des cvs
  cvs: Cv[] = [
    new Cv(1, 'lepauvre', 'Martial', 'Dev', '123', 22, '    '),
    new Cv(2, 'codet', 'Marie', 'Dev', '1234', 20, 'rotating_card_profile.png'),
  ];
  // sayHelloService = new SayHelloService();
  selectedCv: Cv | null = null;
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  // Voila ce que je commande (Injection de dépendance)
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.sayHelloService.hello();
    this.loggerService.logger('cc je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech :D');
  }
  onForwardCv(cv: Cv): void {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
