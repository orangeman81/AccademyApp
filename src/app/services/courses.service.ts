import { Injectable } from '@angular/core';
import { Feathers } from './feathers.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {

  constructor(private feathers: Feathers) { }

  courses$(): Observable<any> {
    return this.feathers
      .service('courses')
      .find({
        query: {
          $sort: {
            title: 1
          }
        }
      })
  }

  coursesById$(id: string): Observable<any> {
    return this.feathers
      .service('courses')
      .find({
        query: {
          _id: id
        }
      })
  }

  grads$(): Observable<any> {
    return this.feathers
      .service('courses')
      .find({
        query: {
          type: "graduation"
        }
      })
  }

  masters$(): Observable<any> {
    return this.feathers
      .service('courses')
      .find({
        query: {
          type: "master"
        }
      })
  }

  profs$(): Observable<any> {
    return this.feathers
      .service('courses')
      .find({
        query: {
          type: "professional"
        }
      })
  }

  coursesMilan$(): Observable<any> {
    return this.feathers
      .service('courses')
      .find({
        query: {
          type: "milan"
        }
      })
  }

  courseDetails$(id: string): Observable<any> {
    return this.feathers
      .service('courses')
      .find({
        query: {
          _id: id
        }
      });
  }

  addCourse(
    course: any,
    fileName: string,
    file: Blob,
    docName: string
  ) {
    if (fileName !== "") {
      this.feathers
        .service('uploads')
        .create({
          id: fileName,
          uri: file
        })
        .then(response => {
          console.log('Server responded with: ', response);
          this.feathers
            .service('courses')
            .create({
              title: course.title,
              description: course.description,
              requirements: course.requirements,
              access: course.access,
              certificate: course.certificate,
              goals: course.goals,
              job: course.job,
              program: course.program,
              programII: course.programII,
              programIII: course.programIII,
              tag: course.tag,
              type: course.type,
              fileName: fileName,
              docName: docName
            });
        })
    } else {
      return null;
    }
  }

  updateCourse(
    course: any,
    oldFile: string,
    oldDoc: string,
    id: string,
    newFile: string,
    newDoc: string
  ) {
    if (newFile !== "") {
      oldFile = newFile;
    }
    if (newDoc != "") {
      oldDoc = newDoc
    }
    this.feathers
      .service('courses')
      .patch(id, {
        title: course.title,
        description: course.description,
        requirements: course.requirements,
        access: course.access,
        certificate: course.certificate,
        goals: course.goals,
        job: course.job,
        program: course.program,
        programII: course.programII,
        programIII: course.programIII,
        tag: course.tag,
        type: course.type,
        fileName: oldFile,
        docName: oldDoc,
      });
  }

  deleteCourse(fileName, docName, id) {
    if (fileName !== "") {
      this.feathers
        .service('uploads')
        .remove(fileName);
    }
    if (docName !== "") {
      this.feathers
        .service('uploads')
        .remove(docName);
    }
    this.feathers
      .service('courses')
      .remove(id);
  }

}
