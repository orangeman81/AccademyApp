import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html'
})
export class AddNewsFormComponent {
  @Input() fileVal: boolean;
  @Output() addNewsForm = new EventEmitter();
  @Output() file = new EventEmitter();

  constructor() { }

}
