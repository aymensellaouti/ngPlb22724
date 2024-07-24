import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [],
})
export class CvComponent {
  today = new Date();
  // Todo : Migrer la création de la liste vers un cvService
  //Crée la liste des cvs
  cvs: Cv[] = [];
  // sayHelloService = new SayHelloService();
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  cvService = inject(CvService);
  selectedCv$ = this.cvService.selectCv$;
  // Voila ce que je commande (Injection de dépendance)
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.cvs = this.cvService.getCvs();
    this.sayHelloService.hello();
    this.loggerService.logger('cc je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech :D');
    // this.selectedCv$ = this.cvService.selectCv$;
    // this.cvService.selectCv$.subscribe({
    //   next: (cv) => this.selectedCv = cv
    // });
  }
  // onForwardCv(cv: Cv): void {
  //   this.selectedCv = cv;
  //   this.todoService.logTodos();
  // }
}
