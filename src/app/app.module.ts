import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LibService} from "./services/lib.service";
import { ChooseQuantityComponent } from './choose-quantity/choose-quantity.component';
// import { CourseCardComponent } from './course-card/course-card.component';
import {CoursesModule} from "./course-card/courses.module";
// import {CourseService} from "./services/course.service";

@NgModule({
  declarations: [
    AppComponent,
    ChooseQuantityComponent,
    // CourseCardComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule
  ],
  providers: [
    LibService,
    // CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
