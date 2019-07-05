export class Task {
  constructor(
    public type: string,
    public question: string,
    public options: any[],
    public answer: string
  ) {}
}
