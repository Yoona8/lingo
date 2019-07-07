import { Lesson } from '../models/lesson.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LessonService {
  constructor(private http: HttpClient) {}

  public fetchLesson() {
    return this.http.get<Lesson>('https://lingo-app-7a6fd.firebaseio.com/lesson.json');
  }
}
