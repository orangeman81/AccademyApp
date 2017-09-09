import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-info-view',
  templateUrl: './details-info-view.component.html'
})
export class DetailsInfoViewComponent {

  @Input() infoDetails;

  constructor() { }

}
