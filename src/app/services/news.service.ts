import { Injectable } from '@angular/core';
import { Feathers } from './feathers.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {

  constructor(private feathers: Feathers) { }

  news$(limit: number): Observable<any> {
    return this.feathers
      .service('news')
      .find({
        query: {
          $sort: { createdAt: -1 },
          $limit: limit
        }
      })
  }

  related$(tag: string, id: string): Observable<any> {
    return this.feathers
      .service('news')
      .find({
        query: {
          tag: tag,
          _id: {
            $nin: [id]
          },
          $sort: { createdAt: -1 },
          $limit: 3
        }
      })
  }

  newsDetails$(id: string): Observable<any> {
    return this.feathers
      .service('news')
      .find({
        query: {
          _id: id
        }
      });
  }

  addNews(news: any, fileName: string, file: Blob) {
    let date = Date.now();
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
            .service('news')
            .create({
              title: news.title,
              description: news.description,
              tag: news.tag,
              fileName: fileName,
              createdAt: date
            });
        })
    } else {
      return null;
    }
  }

  updateNews(
    news: any,
    oldFile: string,
    id: string,
    newFile: string
  ) {
    if (newFile !== "") {
      this.feathers
        .service('uploads')
        .remove(oldFile)

      oldFile = newFile;
    }
    this.feathers
      .service('news')
      .patch(id, {
        title: news.title,
        description: news.description,
        tag: news.tag,
        fileName: oldFile
      });
  }

  deleteNews(fileName, id) {
    if (fileName !== "") {
      this.feathers
        .service('uploads')
        .remove(fileName);
    }
    this.feathers
      .service('news')
      .remove(id);
  }
}
