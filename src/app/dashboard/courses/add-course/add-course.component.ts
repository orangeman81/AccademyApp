import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { UploadService } from '../../../services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html'
})
export class AddCourseComponent implements OnInit {

  constructor(
    private courses: CoursesService,
    public upload: UploadService,
    private router: Router
  ) { }

  ngOnInit() {
    this.upload.fileVal = false;
  }

  onSubmit(
    courseForm: any,
    fileName: string = this.upload.fileName,
    file: Blob = this.upload.file,
    docName: string = this.upload.docName
  ) {
    if (docName != "") {
      this.upload.uploadDoc();
    }
    this.courses.addCourse(courseForm, fileName, file, docName);
    this.upload.fileName = "";
    this.upload.file = null;
    this.router.navigate(['/dashboard/courses']);
  }

}
