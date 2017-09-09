import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { NewsHomeComponent } from './news-home/news-home.component';

const Homeroutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'courses',
        component: CoursesHomeComponent
      },
      {
        path: 'courses/:id',
        component: CourseDetailsComponent
      },
      {
        path: 'news',
        component: NewsHomeComponent
      },
      {
        path: 'news/:id',
        component: NewsDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(Homeroutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }