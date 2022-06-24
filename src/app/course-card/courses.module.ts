import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCardComponent} from "./course-card.component";
import {CourseService} from "../services/course.service";
import { HighlightedDirective } from './highlighted.directive';



@NgModule({
  declarations: [CourseCardComponent, HighlightedDirective],
  // providers: [CourseService],
  imports: [
    CommonModule
  ],
  exports: [CourseCardComponent, HighlightedDirective]
})
export class CoursesModule { }
