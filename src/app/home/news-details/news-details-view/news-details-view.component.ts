import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-details-view',
  templateUrl: './news-details-view.component.html',
  styleUrls: ['./news-details-view.component.scss']
})
export class NewsDetailsViewComponent {

  @Input() news;

  constructor() { }

}
