import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../../../models/task.model';

@Component({
  selector: 'app-task-gap',
  templateUrl: './task-gap.component.html',
  styleUrls: ['./task-gap.component.scss']
})

export class TaskGapComponent implements OnInit, OnChanges {
  @Input() task: Task;
  @Output() answerSubmitted = new EventEmitter<any>();
  private _question: string;

  ngOnInit(): void {
    this.fillQuestion('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fillQuestion('');
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

    const taskData = new FormData(evt.target);
    const answer = this.task.question.replace('__', taskData.get('option').toString());

    this.answerSubmitted.emit(answer.toLowerCase() === this.task.answer.toLowerCase());
    this.task.isCompleted = true;
  }
}
