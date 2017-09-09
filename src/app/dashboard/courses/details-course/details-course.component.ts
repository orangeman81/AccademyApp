import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { CoursesService } from '../../../services/courses.service';
import { UploadService } from '../../../services/upload.service';
import { Observable } from 'rxjs/Observable';
import { Courses } from './../../../shared/models/courses';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.scss']
})
export class DetailsCourseComponent implements OnInit, OnDestroy {

  courseDetails$: Courses;
  courseDetailsSub: ISubscription;
  private Id: string;
  public formLayout: boolean = false;
  public iconToggle: string = "update";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courses: CoursesService,
    public upload: UploadService
  ) { }

  ngOnInit() {
    this.Id = this.route.snapshot.params['id'];
    this.upload.fileVal = true;
    this.courseDetailsSub = this.courses.courseDetails$(this.Id)
      .subscribe(data => {
        this.courseDetails$ = data.data[0];
      });
  }

  ngOnDestroy() {
    this.courseDetailsSub.unsubscribe();
  }

  onSubmit(
    updateForm: any,
    oldFile: string,
    oldDoc: string,
    id: string = this.Id,
    NewFile: string = this.upload.fileName,
    NewDoc: string = this.upload.docName
  ) {
    if (NewDoc != "") {
      this.upload.removeFile(oldDoc);
      this.upload.uploadDoc();
    }
    if (NewFile != "") {
      this.upload.removeFile(oldFile);
      this.upload.uploadFile();
    }
    this.courses.updateCourse(
      updateForm,
      oldFile,
      oldDoc,
      id,
      NewFile,
      NewDoc
    );
    this.formLayout = false;
  }

  delete(fileName: string, docName: string, id: String = this.Id) {
    this.courses.deleteCourse(fileName, docName, id);
    this.router.navigate(['/dashboard/courses']);
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
