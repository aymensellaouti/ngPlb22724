import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { SecondComponent } from './components/second/second.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
import { canLeaveGuard } from './guards/can-leave.guard';

const routes: Routes = [
  // 'cv'
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/add', component: AddCvComponent, canActivate: [authGuard] },
  { path: 'cv/:id', component: DetailsCvComponent },
  { path: 'todo', component: TodoComponent, canDeactivate: [canLeaveGuard] },
  { path: 'color', component: ColorComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'second/:quelqueChose/:autreTruc', component: SecondComponent },
  { path: '**', component: Nf404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
