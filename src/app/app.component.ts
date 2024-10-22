import { Component, ViewChild, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  @ViewChild('cardRef1', {read: ElementRef})
  card1: ElementRef;

  @ViewChild('courseImage')
  courseImage: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    // Will be undefined - cannot go deeper down hierarchy with @ViewChild
    console.log("courseImage", this.courseImage)
    // Will display course card html element with @ViewChild
    console.log('card1', this.card1)
    // Returns a QueryList with @ViewChildren
    console.log(this.cards)
    // Returns the first component in the QueryList (QueryList has a number of built in properties, similar to @for variables n)
    console.log(this.cards.first)
    // changes is an observable that will run any time there are changes to the list. Subscribe allows us to run an operation each time changes are detected.
    this.cards.changes.subscribe(
      cards => console.log(cards)
    )

  }
  onCoursesEdited() {
    this.courses.push({
      id: Math.random(),
      description: "Angular CORE DEEP Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: 'INTERMEDIATE',
      lessonsCount: 10
  })
  }
  
  onCourseSelected(course: Course) {

  }

}
