import { inject, Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "src/app/services/logger.service";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  #todos: Todo[] = [];
  loggerService = inject(LoggerService);

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.#todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    if (this.#todos.length) {
      todo.id = this.#todos[this.#todos.length - 1].id + 1;
    } else {
      todo.id = 1;
    }
    this.#todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(index: number): boolean {
    // const index = this.#todos.indexOf(todo);
    if (index != -1) {
      this.#todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.logger(this.#todos);
  }
}
