import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-nav',
  templateUrl: './info-nav.component.html',
  styleUrls: ['./info-nav.component.scss']
})
export class InfoNavComponent {

  @Input() info;
  constructor() { }

}
