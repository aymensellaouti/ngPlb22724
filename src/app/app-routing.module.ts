import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { SecondComponent } from './components/second/second.component';
import { Nf404Component } from './components/nf404/nf404.component';

const routes: Routes = [
  // 'cv'
  { path: '', component: FirstComponent},
  { path: 'cv', component: CvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'color', component: ColorComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'second/:quelqueChose/:autreTruc', component: SecondComponent},
  { path: '**', component: Nf404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
