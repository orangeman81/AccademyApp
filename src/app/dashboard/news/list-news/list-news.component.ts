import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { Observable } from 'rxjs/Observable';
import { News } from '../../../shared/models/news';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html'
})
export class ListNewsComponent implements OnInit, OnDestroy {

  private newsList$: Array<News>;
  public query$: Array<News>;
  private newsSub: ISubscription;
  public lenght: number;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.loadContent(12);
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }

  loadContent(event) {
    this.newsSub = this.news.news$(event)
      .subscribe(news => {
        this.newsList$ = this.query$ = news.data;
        this.lenght = news.total;
      });
  }

  search(query) {
    this.query$ = this.newsList$
      .filter(news => (news.title.toLowerCase().includes(query.toLowerCase()) || news.tag.toLowerCase().includes(query.toLowerCase())));
  }

}
