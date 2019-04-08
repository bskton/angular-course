import { Component } from '@angular/core';
import { COURSES } from '../data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2];

  onCourseSelected(course: Course) {
    console.log('Course Selected', course);
  }
}
