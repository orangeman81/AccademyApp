import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';
import { InfoHomeComponent } from './info-home/info-home.component';
import { InfoViewComponent } from './info-view/info-view.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    children: [
      {
        path: '',
        component: InfoHomeComponent
      },
      {
        path: ':id',
        component: InfoViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
