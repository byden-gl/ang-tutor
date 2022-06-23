import {Component, Inject} from '@angular/core';
import {CourseService} from "./services/course.service";
// import {COURSE_SERVICE_TOKEN} from "./providers/course-service-token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(@Inject(COURSE_SERVICE_TOKEN) private courseService: CourseService) {
  // constructor(@Inject(CourseService) private courseService: CourseService) {
  constructor(private courseService: CourseService) {
    courseService.libService.meetService();
  }
}
