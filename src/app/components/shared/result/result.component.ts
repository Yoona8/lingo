import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent {
  @Input() isCorrect: boolean;
  @Input() resultText: string;
  @Output() nextButtonClicked = new EventEmitter<any>();

  public onNextButtonClick() {
    this.nextButtonClicked.emit();
  }
}
