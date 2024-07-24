import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
  observable$: Observable<number>;
  toastr = inject(ToastrService);
  constructor() {
    // 5 4 3 2 1
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        // Si i == 0 Je termine mon flux
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        // si i est différent de 0 j'envoi une nouvelle valeur dans le
        //flux
        observer.next(i--);
      }, 1000);
    });
    // Je m'inscrit et je définit mon comportement à chaque fois que
    // je recois une nouvelle valeur du flux
    // setTimeout(()=> {
          this.observable$
          // 5 4 3 2 1
          .pipe(
            map((val) => val * 3 ),
            // 15 12 9 6 3
            filter( val => (val % 2) == 0)
            // 12 6
          )
          .subscribe({
            next: (val) => {
              this.toastr.info(`Je recois ${val}`);
            },
            complete: () => {
              this.toastr.warning('Boom !!!');
            },
          });
    // }, 3000)
    this.observable$.subscribe({
      next: (monNombre) => {
        console.log(monNombre);
      },
    });

  }
}
