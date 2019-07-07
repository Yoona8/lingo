import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../models/lesson.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})

export class LessonComponent implements OnInit {
  private _lesson: Lesson;
  private _state: {
    isLoaded: boolean,
    currentTaskIndex: number,
    tasksCompleted: number,
    tasksTotal: number,
    isTasksCompleted: boolean
  };

  constructor(
    public lessonService: LessonService
  ) {}

  ngOnInit(): void {
    this._state = {
      isLoaded: false,
      currentTaskIndex: 0,
      tasksCompleted: 0,
      tasksTotal: 0,
      isTasksCompleted: false
    };

    this.lessonService.fetchLesson().subscribe((lesson: Lesson) => {
      this._lesson = Object.assign({}, lesson);
      this._state.isLoaded = true;
      this._state.tasksTotal = this._lesson.tasks.length;
    });
  }

  public get lesson(): Lesson {
    return this._lesson;
  }

  public get task(): Task {
    return this._lesson.tasks[this._state.currentTaskIndex];
  }

  public get progress() {
    return (this._state.tasksCompleted / this._state.tasksTotal * 100).toFixed(0) + '%';
  }

  public get state() {
    return this._state;
  }

  public goToNextTask() {
    if (this._state.currentTaskIndex < this._lesson.tasks.length - 1) {
      this._state.tasksCompleted++;
      this._state.currentTaskIndex++;
      return;
    }

    this._state.tasksCompleted++;
    this._state.currentTaskIndex++;
    this._state.isTasksCompleted = true;
  }

  public onAnswerSubmitted(isCorrect) {
    this.task.isCorrect = isCorrect;
  }

  public onNextButtonClick() {
    this.goToNextTask();
  }
}
