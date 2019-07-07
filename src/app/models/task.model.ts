export class Task {
  constructor(
    public type: string,
    public question: string,
    public options: string[][],
    public answer: string,
    public isCorrect = false,
    public isCompleted = false
  ) {}
}
