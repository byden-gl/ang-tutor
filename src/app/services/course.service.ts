import {LibService} from "./lib.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CourseService {
  libService: LibService;

  constructor(libService: LibService) {
    this.libService = libService;
  }
}
