import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from "angular2-materialize";
import { FooterComponent } from './footer/footer.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterializeModule
  ],
  declarations: [
    FooterComponent,
    TruncatePipe,
    SearchComponent,
    PaginationComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    FooterComponent,
    SearchComponent,
    PaginationComponent,
    TruncatePipe
  ]
})
export class SharedModule { }
