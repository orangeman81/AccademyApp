import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { NewsService } from '../../../services/news.service';
import { UploadService } from '../../../services/upload.service';
import { Observable } from 'rxjs/Observable';
import { News } from './../../../shared/models/news';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.scss']
})
export class DetailsNewsComponent implements OnInit, OnDestroy {

  public newsDetails$: News;
  private newsDetailsSub: ISubscription;
  private Id: string;
  public formLayout: boolean = false;
  public iconToggle: string = "update";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private news: NewsService,
    public upload: UploadService
  ) { }

  ngOnInit() {
    this.Id = this.route.snapshot.params['id'];
    this.upload.fileVal = true;
    this.newsDetailsSub = this.news.newsDetails$(this.Id)
      .subscribe(data => {
        this.newsDetails$ = data.data[0];
      });
  }

  ngOnDestroy() {
    this.newsDetailsSub.unsubscribe();
  }

  onSubmit(
    updateForm: any,
    oldFile: string,
    id: string = this.Id,
    NewFile: string = this.upload.fileName
  ) {
    this.upload.uploadFile();
    this.news.updateNews(updateForm, oldFile, id, NewFile);
    this.formLayout = false;
  }

  delete(fileName: string, id: String = this.Id) {
    this.news.deleteNews(fileName, id);
    this.router.navigate(['/dashboard/news']);
  }

  layout() {
    if (this.formLayout) {
      this.formLayout = false;
      this.iconToggle = "update";
    } else {
      this.iconToggle = "info_outline";
      this.formLayout = true;
    }
  }

}
