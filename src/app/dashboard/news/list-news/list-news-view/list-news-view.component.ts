import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-news-view',
  templateUrl: './list-news-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListNewsViewComponent {
  
  @Input() newsList;

  constructor() { }

}
