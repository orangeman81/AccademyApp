import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details-course-form',
  templateUrl: './details-course-form.component.html'
})
export class DetailsCourseFormComponent {

  @Input() courseDetails;
  @Input() fileVal: boolean;
  @Output() detailsForm = new EventEmitter();
  @Output() file = new EventEmitter();
  @Output() doc = new EventEmitter();

  constructor() { }

}
