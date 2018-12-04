import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Config {
  private pathDomain = 'https://app.doctelladev.com';
  private WS_TOKEN = 'fdce1e74ed5125589d66c80bfc02162c';
  private http_headers = {
    'X-DOCTELLA-APP-ID':  '26c301b1ebe247e6bc5f49b15c159571',
    'X-DOCTELLA-APP-KEY': '26cb713e-a350-4139-962d-b3b75958d0d1'
  };

  constructor() { }
  public getDomainUrl(): string {
    return this.pathDomain + '/api/';
  }
  public getKeyToken() {
    return this.WS_TOKEN;
  }

  public getHttpHeader() {
    return this.http_headers;
  }
}
