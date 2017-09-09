import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from './../../../services/info.service';
import { UploadService } from './../../../services/upload.service';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html'
})
export class AddInfoComponent {

  constructor(
    private info: InfoService,
    public upload: UploadService,
    private router: Router
  ) { }

  onSubmit(
    infoForm: any,
    docName: string = this.upload.docName
  ) {
    if (docName != "") {
      this.upload.uploadDoc();
    }
    this.info.addInfo(infoForm, docName);
    this.router.navigate(['/dashboard/info']);
  }

}
