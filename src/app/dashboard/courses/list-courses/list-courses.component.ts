import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { CoursesService } from '../../../services/courses.service';
import { Observable } from 'rxjs/Observable';
import { Courses } from '../../../shared/models/courses';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html'
})
export class ListCoursesComponent implements OnInit, OnDestroy {

  private coursesList$: Array<Courses>;
  public query$: Array<Courses>;
  private courseSub: ISubscription;

  constructor(private courses: CoursesService) { }

  ngOnInit() {
    this.courseSub = this.courses.courses$()
      .subscribe(courses => this.coursesList$ = this.query$ = courses.data);
  }

  ngOnDestroy() {
    this.courseSub.unsubscribe();
  }

  search(query) {
    this.query$ = this.coursesList$
      .filter(course => (course.title.toLowerCase().includes(query.toLowerCase()) || course.description.toLowerCase().includes(query.toLowerCase())));
  }

}
