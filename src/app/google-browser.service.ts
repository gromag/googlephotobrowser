import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, concatMap, combineAll, flatMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GoogleBrowserService {
  searchUrl: string = "https://photoslibrary.googleapis.com/v1/mediaItems:search"
  
  
  constructor(
    private http: HttpClient
  ) { }

  searchPerformed: EventEmitter<any> = new EventEmitter();


  public searchByDate(mediaDate: Date, pageSize: number, accessToken: string){

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + accessToken);
    headers = headers.append('Content-Type', 'application/json')


    const body = {
      "pageSize": pageSize,
      "filters": {
        "dateFilter": {
          "dates": [
            {
              "month": mediaDate.getUTCMonth() + 1,
              "day": mediaDate.getUTCDate(),
              "year": mediaDate.getUTCFullYear()
            }
          ]
        }
      }
    };

    this.http
      .post(this.searchUrl, body, { headers: headers})
      .subscribe(
        data => {console.log(data); this.searchPerformed.emit(data);},
        error => {console.log(error);}
      );
  }
}
