import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCardComponent} from "./course-card.component";
import { HighlightedDirective } from './highlighted.directive';



@NgModule({
  declarations: [CourseCardComponent, HighlightedDirective],
  imports: [
    CommonModule
  ],
  exports: [CourseCardComponent, HighlightedDirective]
})
export class CoursesModule { }
