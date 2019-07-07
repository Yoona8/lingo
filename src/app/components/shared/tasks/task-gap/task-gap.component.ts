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
  private _answer: string;

  ngOnInit(): void {
    this.fillQuestion('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fillQuestion('');
  }

  public get question() {
    return this._question;
  }

  private fillQuestion(value: any = '') {
    this._question = this.task.question.replace(
      '__', '<span class="gap">' + value + '</span>'
    );
  }

  public onOptionChange(evt) {
    this._answer = evt.target.value;
  }

  public onTaskSubmit(evt) {
    evt.preventDefault();

    const answer = this.task.question.replace('__', this._answer);

    this.fillQuestion(this._answer);
    this.answerSubmitted.emit(answer.toLowerCase() === this.task.answer.toLowerCase());
    this.task.isCompleted = true;
  }
}
