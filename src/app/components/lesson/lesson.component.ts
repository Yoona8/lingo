import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../models/lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})

export class LessonComponent implements OnInit {
  private _lesson: Lesson;

  constructor(
    public lessonService: LessonService
  ) {}

  ngOnInit(): void {
    this.lessonService.init();
    this._lesson = this.lessonService.lesson;
  }

  public get lesson(): Lesson {
    return this._lesson;
  }
}
