import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Info } from './../../shared/models/info';
import { InfoService } from './../../services/info.service';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.scss']
})
export class InfoViewComponent implements OnInit, OnDestroy {

  public info$: Observable<Info>;
  private infoSub: ISubscription;

  constructor(
    private route: ActivatedRoute,
    private info: InfoService
  ) { }

  ngOnInit() {

    this.infoSub = this.route.params
      .switchMap(params => this.info.infoByUrl$(params['id']))
      .subscribe(info => {
        this.info$ = info.data[0];
      });
  }

  ngOnDestroy() {
    this.infoSub.unsubscribe();
  }

}
