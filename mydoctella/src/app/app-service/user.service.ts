import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private _service: ApiService) { }

  login(data: any) {
    return this._service.post('signin', data);
  }
}
