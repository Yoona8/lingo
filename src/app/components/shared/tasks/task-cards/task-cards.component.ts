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

  public onTaskSubmit(evt) {
    evt.preventDefault();

    const answer = new FormData(evt.target).get('option');

    this.answerSubmitted.emit(answer === this.task.answer);
    this.task.isCompleted = true;
  }
}
