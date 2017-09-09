import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from './../../services/courses.service';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
import { Courses } from './../../shared/models/courses';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.scss']
})
export class CoursesHomeComponent implements OnInit, OnDestroy {

  private courses$: Array<Courses>;
  public query$: Array<Courses>;
  private coursesSub$: ISubscription;

  constructor(private courses: CoursesService) { }

  ngOnInit() {
    this.coursesSub$ = this.courses.courses$()
      .subscribe(data => this.courses$ = this.query$ = data.data)
  }

  ngOnDestroy() {
    this.coursesSub$.unsubscribe();
  }

  search(query) {
    this.query$ = this.courses$
      .filter(course => (course.title.toLowerCase().includes(query.toLowerCase()) || course.description.toLowerCase().includes(query.toLowerCase())));
  }

}
