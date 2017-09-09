import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-details-view',
  templateUrl: './course-details-view.component.html',
  styleUrls: ['./course-details-view.component.scss']
})
export class CourseDetailsViewComponent {

  @Input() course;

  constructor() { }

}
