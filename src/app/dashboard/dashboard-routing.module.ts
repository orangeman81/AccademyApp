import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { ListNewsComponent } from './news/list-news/list-news.component';
import { DetailsNewsComponent } from './news/details-news/details-news.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { ListCoursesComponent } from './courses/list-courses/list-courses.component';
import { DetailsCourseComponent } from './courses/details-course/details-course.component';
import { DashInfoComponent } from './dash-info/dash-info.component';
import { DetailsInfoComponent } from './dash-info/details-info/details-info.component';
import { AddInfoComponent } from './dash-info/add-info/add-info.component';
import { ListInfoComponent } from './dash-info/list-info/list-info.component';

const Dashboardroutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashHomeComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
        children: [
          {
            path: '',
            component: ListNewsComponent
          },
          {
            path: 'add',
            component: AddNewsComponent
          },
          {
            path: 'details/:id',
            component: DetailsNewsComponent
          }
        ]
      },
      {
        path: 'courses',
        component: CoursesComponent,
        children: [
          {
            path: '',
            component: ListCoursesComponent
          },
          {
            path: 'add',
            component: AddCourseComponent
          },
          {
            path: 'details/:id',
            component: DetailsCourseComponent
          }
        ]
      },
      {
        path: 'info',
        component: DashInfoComponent,
        children: [
          {
            path: '',
            component: ListInfoComponent
          },
          {
            path: 'add',
            component: AddInfoComponent
          },
          {
            path: 'details/:id',
            component: DetailsInfoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(Dashboardroutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class DashboardRoutingModule { }
