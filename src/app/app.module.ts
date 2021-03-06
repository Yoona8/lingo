import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { LessonService } from './services/lesson.service';
import { TaskCardsComponent } from './components/shared/tasks/task-cards/task-cards.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { TaskGapComponent } from './components/shared/tasks/task-gap/task-gap.component';
import { ResultComponent } from './components/shared/result/result.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LessonComponent,
    TaskCardsComponent,
    ButtonComponent,
    TaskGapComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
