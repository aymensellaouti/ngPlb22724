import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { FormsModule } from '@angular/forms';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { SommmeComponent } from './components/sommme/sommme.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { TodoComponent } from './todo/todo/todo.component';
import { WeekTodosComponent } from './todo/week-todos/week-todos.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { TestFormComponent } from './formulaires/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './rxjs/test-observable/test-observable.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authInterceptorProvider } from './auth/interceptors/auth.interceptor';


// On est entrain de définir le contexte de compilation
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CvCardComponent,
    NgstyleComponent,
    MiniWordComponent,
    SommmeComponent,
    LampeComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    WeekTodosComponent,
    EmbaucheComponent,
    NavbarComponent,
    Nf404Component,
    DetailsCvComponent,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    AddCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
  ],
  providers: [
    authInterceptorProvider
    // LoggerService,
    // Voila ce que j'offre en tant que framework : (C'est mon menu)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
