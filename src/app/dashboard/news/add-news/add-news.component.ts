import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { UploadService } from '../../../services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  constructor(
    private news: NewsService,
    public upload: UploadService,
    private router: Router
  ) { }

  ngOnInit() {
    this.upload.fileVal = false;
  }

  onSubmit(
    newsForm: any,
    fileName: string = this.upload.fileName,
    file: Blob = this.upload.file
  ) {
    this.news.addNews(newsForm, fileName, file);
    this.upload.fileName = "";
    this.upload.file = null;
    this.router.navigate(['/dashboard/news']);
  }

}
