import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Output('courseChanged')
  courseEmmiter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {}

  onSaveClicked(description: string) {
    this.courseEmmiter.emit({...this.course, description});
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
}
