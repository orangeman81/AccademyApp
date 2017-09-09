import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-info-form',
  templateUrl: './add-info-form.component.html'
})
export class AddInfoFormComponent {

   @Output() addInfoForm = new EventEmitter();
   @Output() doc = new EventEmitter();

  constructor() { }

}
