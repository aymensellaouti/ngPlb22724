import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";

export interface TodoApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Injectable({providedIn: 'root'})
export class TestHttpService {

  http = inject(HttpClient);

  getTodos(): Observable<TodoApi[]> {
    return this.http.get<TodoApi[]>('https://jsonplaceholder.typicode.com/todos')
    // .pipe(
    //   shareReplay(1)
    // );
  }
}
