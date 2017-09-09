import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// router
import { HomeRoutingModule } from './home-routing.module';

// components
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { NewsListComponent } from './news-list/news-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsViewComponent } from './course-details/course-details-view/course-details-view.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsDetailsViewComponent } from './news-details/news-details-view/news-details-view.component';
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { NewsHomeComponent } from './news-home/news-home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NavComponent,
    NewsListComponent,
    WelcomeComponent,
    CourseDetailsComponent,
    CourseListComponent,
    CourseDetailsViewComponent,
    NewsDetailsComponent,
    NewsDetailsViewComponent,
    CoursesHomeComponent,
    NewsHomeComponent
  ]
})
export class HomeModule { }