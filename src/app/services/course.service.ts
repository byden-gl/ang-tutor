import {LibService} from "./lib.service";
import {Injectable} from "@angular/core";
import {CoursesModule} from "../course-card/courses.module";

let counter = 0;

@Injectable({
  providedIn: CoursesModule
  // providedIn: 'root'
})
export class CourseService {
  public id: number;
  public libService: LibService;

  constructor(libService: LibService) {
    counter++;
    this.libService = libService;
    this.id = counter;
  }
}
