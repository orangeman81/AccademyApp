import { Injectable } from '@angular/core';
import { Feathers } from './feathers.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InfoService {

  constructor(private feathers: Feathers) { }

  info$(): Observable<any> {
    return this.feathers
      .service('info')
      .find({
        query: {
          $sort: {
            title: 1
          }
        }
      })
  }

  infoById$(id): Observable<any> {
    return this.feathers
      .service('info')
      .find({
        query: {
          _id: id
        }
      })
  }

  infoByUrl$(url): Observable<any> {
    return this.feathers
      .service('info')
      .find({
        query: {
          infoUrl: url
        }
      })
  }

  addInfo(
    info: any,
    docName: string
  ) {
    this.feathers
      .service('info')
      .create({
        title: info.title,
        infoUrl: info.infoUrl,
        sectionTitle: info.sectionTitle,
        sectionContent: info.sectionContent,
        listTitle: info.listTitle,
        listContent: info.listContent,
        listTitleII: info.listTitleII,
        listContentII: info.listContentII,
        listTitleIII: info.listTitleIII,
        listContentIII: info.listContentIII,
        sectionTitleII: info.sectionTitleII,
        sectionContentII: info.sectionContentII,
        sectionTitleIII: info.sectionTitleIII,
        sectionContentIII: info.sectionContentIII,
        infoEmail: info.infoEmail,
        infoPhone: info.infoPhone,
        docName: docName
      });
  }

  updateInfo(
    info: any,
    oldDoc: string,
    id: string,
    newDoc: string
  ) {
    if (newDoc != "") {
      oldDoc = newDoc
    }
    this.feathers
      .service('info')
      .patch(id, {
        title: info.title,
        infoUrl: info.infoUrl,
        sectionTitle: info.sectionTitle,
        sectionContent: info.sectionContent,
        listTitle: info.listTitle,
        listContent: info.listContent,
        listTitleII: info.listTitleII,
        listContentII: info.listContentII,
        listTitleIII: info.listTitleIII,
        listContentIII: info.listContentIII,
        sectionTitleII: info.sectionTitleII,
        sectionContentII: info.sectionContentII,
        sectionTitleIII: info.sectionTitleIII,
        sectionContentIII: info.sectionContentIII,
        infoEmail: info.infoEmail,
        infoPhone: info.infoPhone,
        docName: oldDoc,
      });
  }

  deleteInfo(docName, id) {
    if (docName !== "") {
      this.feathers
        .service('uploads')
        .remove(docName);
    }
    this.feathers
      .service('info')
      .remove(id);
  }
}

