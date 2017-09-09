// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// router
import { DashboardRoutingModule } from './dashboard-routing.module';

// components
import { DashboardComponent } from './dashboard.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashNavComponent } from './dash-nav/dash-nav.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { NewsComponent } from './news/news.component';
import { ListNewsComponent } from './news/list-news/list-news.component';
import { DetailsNewsComponent } from './news/details-news/details-news.component';
import { DetailsNewsFormComponent } from './news/details-news/details-news-form/details-news-form.component';
import { DetailsNewsViewComponent } from './news/details-news/details-news-view/details-news-view.component';
import { AddNewsFormComponent } from './news/add-news/add-news-form/add-news-form.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { ListCoursesComponent } from './courses/list-courses/list-courses.component';
import { DetailsCourseComponent } from './courses/details-course/details-course.component';
import { AddCourseFormComponent } from './courses/add-course/add-course-form/add-course-form.component';
import { ListNewsViewComponent } from './news/list-news/list-news-view/list-news-view.component';
import { ListCoursesViewComponent } from './courses/list-courses/list-courses-view/list-courses-view.component';
import { DetailsCourseViewComponent } from './courses/details-course/details-course-view/details-course-view.component';
import { DetailsCourseFormComponent } from './courses/details-course/details-course-form/details-course-form.component';
import { DashInfoComponent } from './dash-info/dash-info.component';
import { AddInfoComponent } from './dash-info/add-info/add-info.component';
import { DetailsInfoComponent } from './dash-info/details-info/details-info.component';
import { ListInfoComponent } from './dash-info/list-info/list-info.component';
import { AddInfoFormComponent } from './dash-info/add-info/add-info-form/add-info-form.component';
import { DetailsInfoFormComponent } from './dash-info/details-info/details-info-form/details-info-form.component';
import { DetailsInfoViewComponent } from './dash-info/details-info/details-info-view/details-info-view.component';
import { ListInfoViewComponent } from './dash-info/list-info/list-info-view/list-info-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashHomeComponent,
    DashNavComponent,
    AddNewsComponent,
    NewsComponent,
    ListNewsComponent,
    DetailsNewsComponent,
    DetailsNewsFormComponent,
    DetailsNewsViewComponent,
    AddNewsFormComponent,
    CoursesComponent,
    AddCourseComponent,
    ListCoursesComponent,
    DetailsCourseComponent,
    AddCourseFormComponent,
    ListNewsViewComponent,
    ListCoursesViewComponent,
    DetailsCourseViewComponent,
    DetailsCourseFormComponent,
    DashInfoComponent,
    AddInfoComponent,
    DetailsInfoComponent,
    ListInfoComponent,
    AddInfoFormComponent,
    DetailsInfoFormComponent,
    DetailsInfoViewComponent,
    ListInfoViewComponent
  ]
})
export class DashboardModule { }
