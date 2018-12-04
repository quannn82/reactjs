import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Config} from '../config/config';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;
  private token: string | Int32Array;
  private req_time = new Date().setHours(0, 0, 0, 0);
  private httpOptions = {
    headers: {}
  };
  constructor(private http: HttpClient, private _config: Config) {
    this.apiUrl = _config.getDomainUrl();
    this.token = Md5.hashStr(this.req_time.toString() + this._config.getKeyToken());
    this.httpOptions.headers = new HttpHeaders(this._config.getHttpHeader());
  }
  public post(api: string, body: any): Observable<any> {
    if (body.token === undefined) {
      body.token = this.token;
    }
    if (body.req_time === undefined) {
      body.req_time = this.req_time.toString();
    }
    return this.http.post(this.apiUrl + api, body, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
