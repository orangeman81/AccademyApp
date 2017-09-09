import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';

import { SharedModule } from './../shared/shared.module';

import { InfoComponent } from './info.component';
import { InfoViewComponent } from './info-view/info-view.component';
import { InfoNavComponent } from './info-nav/info-nav.component';
import { InfoDetailsComponent } from './info-view/info-details/info-details.component';
import { InfoHomeComponent } from './info-home/info-home.component';
import { InfoHomeViewComponent } from './info-home/info-home-view/info-home-view.component';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule
  ],
  declarations: [
    InfoComponent,
    InfoViewComponent,
    InfoNavComponent,
    InfoDetailsComponent,
    InfoHomeComponent,
    InfoHomeViewComponent
  ]
})
export class InfoModule { }