import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-course-view',
  templateUrl: './details-course-view.component.html'
})
export class DetailsCourseViewComponent {

  @Input() courseDetails;

  constructor() { }

  ngOnInit() {
  }

}
