import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details-news-form',
  templateUrl: './details-news-form.component.html'
})
export class DetailsNewsFormComponent {
  
  @Input() newsDetails;
  @Input() fileVal: boolean;
  @Output() detailsForm = new EventEmitter();
  @Output() file = new EventEmitter();
  
  constructor() { }

}
