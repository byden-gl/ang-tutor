import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {COURSE_SERVICE_TOKEN} from "./providers/course-service-token";
import {coursesServiceProviderFactory} from "./providers/courses-provider";
import {LibService} from "./services/lib.service";
import {CourseService} from "./services/course.service";
import { ChooseQuantityComponent } from './choose-quantity/choose-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseQuantityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LibService,
    // {
    //   provide: COURSE_SERVICE_TOKEN,
    //   useFactory: coursesServiceProviderFactory,
    //   deps: [LibService]
    // }
    // {
    //   provide: CourseService,
    //   useFactory: coursesServiceProviderFactory,
    //   deps: [LibService]
    // }
    // {
    //   provide: CourseService,
    //   useClass: CourseService,
    //   deps: [LibService]
    // }
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
