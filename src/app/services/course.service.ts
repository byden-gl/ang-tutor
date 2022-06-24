import {LibService} from "./lib.service";
import {Injectable} from "@angular/core";

let counter = 0;

@Injectable()
export class CourseService {
  public id: number;
  public libService: LibService;

  constructor(libService: LibService) {
    counter++;
    this.libService = libService;
    this.id = counter;
  }
}
