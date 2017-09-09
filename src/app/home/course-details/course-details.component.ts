import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs/Observable';
import { Courses } from '../../shared/models/courses';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html'
})
export class CourseDetailsComponent implements OnInit, OnDestroy {

  public course$: Array<Courses>;
  private courseSub: ISubscription;

  constructor(
    private route: ActivatedRoute,
    private courses: CoursesService
  ) { }

  ngOnInit() {

    this.courseSub = this.route.params
      .switchMap(params => this.courses.coursesById$(params['id']))
      .subscribe(course=> {
        this.course$ = course.data[0];
      });
  }

  ngOnDestroy() {
    this.courseSub.unsubscribe();
  }

}
