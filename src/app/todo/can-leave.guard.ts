import { CanDeactivateFn } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";

export const canLeaveGuard: CanDeactivateFn<TodoComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.todo.name.trim() || component.todo.content.trim()) {
    return confirm("Êtes vous sur de vouloir quitter la page ?");
  }
  return true;
};
