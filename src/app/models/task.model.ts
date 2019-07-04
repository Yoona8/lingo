export class Task {
  constructor(
    public type: string,
    public question: any,
    public options: any[],
    public answer: string
  ) {}
}
