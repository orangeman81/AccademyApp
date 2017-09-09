import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-info-view',
  templateUrl: './list-info-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListInfoViewComponent {

  @Input() infoList;

  constructor() { }

}
