import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-courses-view',
  templateUrl: './list-courses-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCoursesViewComponent {

  @Input() coursesList;

  constructor() { }

}
