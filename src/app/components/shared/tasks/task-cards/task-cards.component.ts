import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../../models/task.model';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.scss']
})

export class TaskCardsComponent {
  @Input() task: Task;
  @Output() answerSubmitted = new EventEmitter<any>();
  private _answer: string;

  public onOptionChange(evt) {
    this._answer = evt.target.value;
  }

  public onTaskSubmit(evt) {
    evt.preventDefault();

    this.answerSubmitted.emit(this._answer === this.task.answer);
    this.task.isCompleted = true;
  }
}
