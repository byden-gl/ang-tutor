import {Component, OnInit, Optional} from '@angular/core';
import {CourseService} from "./services/course.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [CourseService]
})
export class AppComponent implements OnInit{
  public courses = [
    {courseId: 1},
    {courseId: 2},
    {courseId: 3},
    {courseId: 4},
    {courseId: 5},
    {courseId: 6},
    {courseId: 7},
  ];

  constructor(@Optional() private courseService: CourseService) {
    if (courseService) {
      courseService.libService.meetService();
    }
  }

  ngOnInit(): void {
    if (this.courseService) {
      console.log(`this instance of CourseService in AppComponent: ${this.courseService.id}`);
    }
  }
}
