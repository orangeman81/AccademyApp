import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent {

  @Input() newsList;

  constructor() { }

}
