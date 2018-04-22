import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  private apiEndpoint: string = environment.apiurl;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http) {}

  // POST login
  login(userName: string, password: string) : Observable<any> {
    return this.http.post(this.apiEndpoint + 'login', {username : userName, password : password}, this.options)
      .map(res => <any[]>res.json());
  }

  // POST register
  register(userName: string, email: string, password: string) : Observable<any> {
    return this.http.post(this.apiEndpoint + 'register', {username : userName, email: email, password : password}, this.options)
      .map(res => <any[]>res.json());
  }

  // POST password reset
  reset(email: string) : Observable<any> {
    return this.http.post(this.apiEndpoint + 'reset', {email: email}, this.options)
      .map(res => <any[]>res.json());
  }

  // POST password confirm
  confirm(userName: string, email: string, password: string) : Observable<any> {
    return this.http.post(this.apiEndpoint + 'confirm', {username : userName, email: email, password : password}, this.options)
      .map(res => <any[]>res.json());
  }
}