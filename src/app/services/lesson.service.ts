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
          'cards',
          'apple',
          [
            ['манго', 'card-pic4.png'],
            ['яблоко', 'card-pic1.png'],
            ['ананас', 'card-pic2.png'],
            ['банан', 'card-pic3.png']
          ],
          'яблоко'
        ),
        new Task(
          'gap',
          '__ she a girl?',
          [
            ['Are'],
            ['Am'],
            ['Is']
          ],
          'Is she a girl?'
        )
      ]
    );
  }
}
