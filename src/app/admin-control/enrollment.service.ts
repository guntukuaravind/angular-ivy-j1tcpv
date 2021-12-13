import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:4200/enroll';

  constructor(private _http: HttpClient) { }
  enroll(admin: Admin){
    return this._http.post<any>(this._url, admin);

  }
}
