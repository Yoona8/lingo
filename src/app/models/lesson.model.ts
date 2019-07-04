import { Task } from './task.model';

export class Lesson {
  constructor(
    public title: string,
    public titleEn: string,
    public pic: string,
    public author: string,
    public authorPic: string,
    public date: Date,
    public level: string,
    public description: string,
    public content: string,
    public exercises: string[],
    public tasks: Task[]
  ) {}
}
