import { Component } from '@angular/core';
import { Feathers } from './../../services/feathers.service';

@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.scss']
})
export class DashNavComponent {

  constructor(public feathers: Feathers) { }

}
