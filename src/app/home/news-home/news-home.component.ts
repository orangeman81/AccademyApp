import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from './../../services/news.service';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
import { News } from './../../shared/models/news';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit, OnDestroy {

  private news$: Array<News>;
  public query$: Array<News>;
  private newsSub$: ISubscription;
  public lenght: number;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.loadContent(12);
  }

  ngOnDestroy() {
    this.newsSub$.unsubscribe();
  }

  loadContent(event) {
    this.newsSub$ = this.news.news$(event)
      .subscribe(data => {
        this.query$ = this.news$ = data.data;
        this.lenght = data.total;
      });
  }

  search(query) {
    this.query$ = this.news$
      .filter(news => (news.title.toLowerCase().includes(query.toLowerCase()) || news.tag.toLowerCase().includes(query.toLowerCase())));
  }

}
