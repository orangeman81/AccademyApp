import { Injectable } from '@angular/core';
import { Feathers } from './feathers.service';

@Injectable()
export class UploadService {

  public file: Blob = null;
  public doc: Blob = null;
  public fileName: string = "";
  public docName: string = "";
  public fileVal: boolean = false;

  constructor(private feathers: Feathers) { }

  uploadFile(fileName: string = this.fileName, file: Blob = this.file) {
    if (this.fileName !== "") {
      this.feathers
        .service('uploads')
        .create({
          id: fileName,
          uri: file
        })
        .then(response => {
          console.log('Server responded with: ', response);
          this.file = null;
          this.fileName = "";
        })
    } else {
      return null;
    }
  }

  uploadDoc(docName: string = this.docName, doc: Blob = this.doc) {
    if (this.docName !== "") {
      this.feathers
        .service('uploads')
        .create({
          id: docName,
          uri: doc
        })
        .then(response => {
          console.log('Server responded with: ', response);
          this.doc = null;
          this.docName = "";
        })
    } else {
      return null;
    }
  }

  getFile(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file = event.target.files[0];
      if (file.size >= 1010000) {
        this.fileVal = false;
      } else {
        this.fileVal = true;
        this.fileName = Math.floor((Math.random() * 100000) + 1).toString() + file.name;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", f => {
          this.file = reader.result;
        }, false);
      }
    }
  }

  getDoc(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let doc = event.target.files[0];
      this.docName = Math.floor((Math.random() * 100000) + 1).toString() + doc.name;

      const reader = new FileReader();
      reader.readAsDataURL(doc);
      reader.addEventListener("load", f => {
        this.doc = reader.result;
      }, false);
    }
  }

  removeFile(file: string) {
     this.feathers
        .service('uploads')
        .remove(file);
  }

}
