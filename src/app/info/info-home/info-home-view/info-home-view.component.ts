import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info-home-view',
  templateUrl: './info-home-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoHomeViewComponent {

  @Input() infoList;

  constructor() { }

}
