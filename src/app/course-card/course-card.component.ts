import { Component, Input, EventEmitter, Output, ViewChild, OnInit, AfterViewInit, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {

  
  @Input({
    required: true
  })
  course: Course;
  
  @Input ()
  index: number;
  
  @Input () 
  cardIndex: number
  
  // @ContentChild - like @ViewChild except will only work for projected content
  @ContentChild(CourseImageComponent)
  image: CourseImageComponent
  
  
  @Output()
  courseSelected = new EventEmitter<Course>()

  onCourseViewed() {
    console.log("card component - button clicked ...")
    this.courseSelected.emit(this.course)
  }

  ngAfterViewInit() {
    console.log(this.image)
  }
  
  cardClasses() {
    switch (this.course.category) {
      case 'BEGINNER':
        return 'beginner';
      case 'INTERMEDIATE':
        return 'intermediate';
      default:
        return 'advanced';
    }
  }
  
}
