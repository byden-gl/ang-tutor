import {Directive, Host} from '@angular/core';
import {CourseService} from "../services/course.service";

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(@Host() private courseService: CourseService) {
    console.log('coursesService highlighted ' + courseService.id)
  }

}
