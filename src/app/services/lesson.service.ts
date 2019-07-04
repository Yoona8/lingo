import { Lesson } from '../models/lesson.model';
import { Task } from '../models/task.model';

export class LessonService {
  private _lesson: Lesson = null;

  public get lesson(): Lesson {
    return this._lesson;
  }

  public init() {
    this._lesson = new Lesson(
      'Время настоящее, часть 1',
      'Present simple, vol. 1',
      'lesson-pic1.jpg',
      'Anna Dormun',
      'anna-dormun-pic.jpg',
      new Date(-3),
      'Beginners',
      '',
      '',
      [],
      [
        new Task(
          'card',
          'apple',
          [
            ['манго', '#'],
            ['яблоко', '#'],
            ['ананас', '#'],
            ['банан', '#']
          ],
          'яблоко'
        ),
        new Task(
          'gap',
          '__ she a girl?',
          [
            'are',
            'am',
            'is'
          ],
          'Is she a girl?'
        )
      ]
    );
  }
}
