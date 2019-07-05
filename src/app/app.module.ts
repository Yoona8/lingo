import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { LessonService } from './services/lesson.service';
import { ButtonComponent } from './components/shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LessonComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
