import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
import { Info } from '../../shared/models/info';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.scss']
})
export class InfoHomeComponent implements OnInit, OnDestroy {

  private info$: Observable<Info>;
  public query$: Observable<Info>;
  private infoSub: ISubscription;
  public infoTitle: any = {"title" : "Info"};

  constructor(private info: InfoService) { }

  ngOnInit() {    
    this.infoSub = this.info.info$()
      .subscribe(info => this.info$ = this.query$ = info.data);
  }

  ngOnDestroy() {
    this.infoSub.unsubscribe();
  }

  search(query) {
    this.query$ = this.info$
      .filter(info => (info.title.toLowerCase().includes(query.toLowerCase())));
  }

}
