import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs/Observable';
import { News } from '../../shared/models/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html'
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  public news$: Array<News>;
  public related$: Observable<News[]>;
  private newsSub: ISubscription;

  constructor(
    private route: ActivatedRoute,
    private news: NewsService
  ) { }

  ngOnInit() {

    this.newsSub = this.route.params
      .switchMap(params => this.news.newsDetails$(params['id']))
      .subscribe(news => {
        this.news$ = news.data[0];
        this.related$ = this.news.related$(news.data[0].tag, news.data[0]._id)
          .map(data => data.data);
      });
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }

}
