import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-news-view.component.html',
  styleUrls: ['./details-news-view.component.scss']
})
export class DetailsNewsViewComponent {
  @Input() newsDetailsView;

  constructor() { }

}
