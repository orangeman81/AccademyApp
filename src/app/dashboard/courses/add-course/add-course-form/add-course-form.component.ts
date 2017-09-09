import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html'
})
export class AddCourseFormComponent {
  @Input() fileVal: boolean;
  @Output() addCourseForm = new EventEmitter();
  @Output() file = new EventEmitter();
  @Output() doc = new EventEmitter();

  constructor() { }

}
