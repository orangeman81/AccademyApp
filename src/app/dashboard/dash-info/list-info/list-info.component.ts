import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
import { Info } from './../../../shared/models/info';
import { InfoService } from './../../../services/info.service';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html'
})
export class ListInfoComponent implements OnInit, OnDestroy {

  private infoList$: Array<Info>;
  public query$: Array<Info>;
  private infoSub: ISubscription;

  constructor(private info: InfoService) { }

  ngOnInit() {
    this.infoSub = this.info.info$()
      .subscribe(info => this.infoList$ = this.query$ = info.data);
  }

  ngOnDestroy() {
    this.infoSub.unsubscribe();
  }

  search(query) {
    this.query$ = this.infoList$
      .filter(info => (info.title.toLowerCase().includes(query.toLowerCase())));
  }

}
