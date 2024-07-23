import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { canLeaveGuard } from "./can-leave.guard";
import { todoReducer } from "./store/reducer";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffect } from "./store/todo.effect";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "todo",
        component: TodoComponent,
        canDeactivate: [canLeaveGuard],
      },
    ]),
    StoreModule.forFeature("todo", todoReducer),
    EffectsModule.forFeature([TodoEffect]),
  ],
})
export class TodoModule {}
