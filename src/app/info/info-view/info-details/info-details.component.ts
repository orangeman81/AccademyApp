import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.scss']
})
export class InfoDetailsComponent {

  @Input() info;

  constructor() { }

}
