import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { TestHttpService } from "src/app/services/test-http.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: [TodoService]
})
export class TodoComponent {
  /**
   * Ca représente ma liste de Todos
   */
  todos: Todo[] = [];
  /**
   * Le todo du formulaire à ajouter à la liste de Todos
   */
  todo = new Todo();

  todoService = inject(TodoService);
  testHttpService = inject(TestHttpService);
  constructor() {
    this.todos = this.todoService.getTodos();
    this.testHttpService.getTodos().subscribe(
      (todos) => console.log(todos)
    )
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }


}
