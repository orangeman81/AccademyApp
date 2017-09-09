import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details-info-form',
  templateUrl: './details-info-form.component.html'
})
export class DetailsInfoFormComponent {

  @Input() infoDetails;
  @Output() detailsInfoForm = new EventEmitter();
  @Output() doc = new EventEmitter();

  constructor() { }

}
