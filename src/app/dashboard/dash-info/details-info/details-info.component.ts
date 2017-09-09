import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { UploadService } from './../../../services/upload.service';
import { InfoService } from './../../../services/info.service';
import { Info } from './../../../shared/models/info';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.scss']
})
export class DetailsInfoComponent implements OnInit {

  infoDetails$: Info;
  infoDetailsSub: ISubscription;
  private Id: string;
  public formLayout: boolean = false;
  public iconToggle: string = "update";
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private info: InfoService,
    public upload: UploadService
  ) { }

  ngOnInit() {
    this.Id = this.route.snapshot.params['id'];
    this.infoDetailsSub = this.info.infoById$(this.Id)
      .subscribe(data => {
        this.infoDetails$ = data.data[0];
      });
  }

  ngOnDestroy() {
    this.infoDetailsSub.unsubscribe();
  }

  onSubmit(
    updateForm: any,
    oldDoc: string,
    id: string = this.Id,
    NewDoc: string = this.upload.docName
  ) {
    if (NewDoc != "") {
      this.upload.removeFile(oldDoc);
      this.upload.uploadDoc();
    }
    this.info.updateInfo(
      updateForm,
      oldDoc,
      id,
      NewDoc
    );
    this.formLayout = false;
  }

  delete(docName: string, id: String = this.Id) {
    this.info.deleteInfo(docName, id);
    this.router.navigate(['/dashboard/info']);
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
