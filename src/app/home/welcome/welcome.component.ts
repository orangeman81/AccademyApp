import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsService } from '../../services/news.service';
import { CoursesService } from '../../services/courses.service';
import { News } from '../../shared/models/news';
import { Courses } from '../../shared/models/courses';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  newsList$: Observable<News[]>;
  gradList$: Observable<Courses[]>;
  mastersList$: Observable<Courses[]>;
  profsList$: Observable<Courses[]>;
  milanList$: Observable<Courses[]>;

  constructor(private news: NewsService, private courses: CoursesService) { }

  ngOnInit() {

    this.newsList$ = this.news.news$(6)
      .map(m => m.data)
      .map(m => m.reverse());

    this.gradList$ = this.courses.grads$()
      .map(m => m.data);

    this.mastersList$ = this.courses.masters$()
      .map(m => m.data);

    this.profsList$ = this.courses.profs$()
      .map(m => m.data);
    
    this.milanList$ = this.courses.coursesMilan$()
      .map(m => m.data);
  }

}
