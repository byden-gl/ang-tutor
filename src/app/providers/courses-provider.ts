import {CourseService} from "../services/course.service";
import {LibService} from "../services/lib.service";

export function coursesServiceProviderFactory(libService: LibService): CourseService {
  return new CourseService(libService);
}
