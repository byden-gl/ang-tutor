import {Component, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {CourseService} from "../services/course.service";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  // providers: [CourseService]
})
export class CourseCardComponent {

  // constructor(@Optional() @SkipSelf() private courseService: CourseService) { }
  // constructor(@Self() private courseService: CourseService) { }
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    if(this.courseService) {
      console.log(`this instance of CourseService: ${this.courseService.id}`);
    }
  }

}
