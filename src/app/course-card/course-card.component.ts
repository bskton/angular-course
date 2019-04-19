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

  @Output('courseSelected')
  courseEmmiter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onViewCourse() {
    this.courseEmmiter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
}
