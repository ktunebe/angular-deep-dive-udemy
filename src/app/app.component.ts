import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  startDate = new Date(2000, 0, 1);
  title = this.courses[0].description;
  price = 9.99
  rate = 0.67
  course = COURSES[0];

  onCourseSelected(course: Course) {
    console.log("App component - click event bubbled ...", course)
  }

  trackCourse(index: number, course: Course) {
    return course.id
  }

}
