import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";



@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
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

  constructor() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }


}
