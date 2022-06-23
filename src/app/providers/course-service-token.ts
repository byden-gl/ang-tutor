import {InjectionToken} from "@angular/core";
import {CourseService} from "../services/course.service";

export const COURSE_SERVICE_TOKEN = new InjectionToken<CourseService>('COURSE_SERVICE_TOKEN');
