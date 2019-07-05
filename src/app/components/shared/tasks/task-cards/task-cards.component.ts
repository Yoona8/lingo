import { Component, Input } from '@angular/core';
import { Task } from '../../../../models/task.model';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.scss']
})

export class TaskCardsComponent {
  @Input() task: Task;

  public onTaskSubmit(evt) {
    evt.preventDefault();
    console.log(new FormData(evt.target).get('option') === this.task.answer);
  }
}
