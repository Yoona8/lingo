import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../../models/task.model';

@Component({
  selector: 'app-task-gap',
  templateUrl: './task-gap.component.html',
  styleUrls: ['./task-gap.component.scss']
})

export class TaskGapComponent implements OnInit {
  @Input() task: Task;
  private _question: string;

  ngOnInit(): void {
    this.fillQuestion();
  }

  public get question() {
    return this._question;
  }

  public fillQuestion(value: any = '') {
    this._question = this.task.question.replace(
      '__', '<span class="gap">' + value + '</span>'
    );
  }

  public onTaskSubmit(evt) {
    evt.preventDefault();
    const option = new FormData(evt.target).get('option');
    this.fillQuestion(option);
    console.log(this.task.question.replace('__', option.toString()) === this.task.answer);
  }
}
