import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../../../environments/environment';

@Injectable()
export class ListService {
  private apiEndpoint: string = environment.apiurl;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http) {}

  // POST create item
  create(user_id: string, listname: string) : Observable<any> {
    console.log(`${user_id}: ${listname}`);
    return this.http.post(this.apiEndpoint + 'list/', {user_id: user_id, listname : listname}, this.options)
      .map(res => <any[]>res.json());
  }

  getLists(user_id: string) : Observable<any> {
    return this.http.get(this.apiEndpoint + 'lists/' + user_id, this.options)
      .map(res => <any[]>res.json());
  }

  delete(_id: string) : Observable<any> {
    return this.http.delete(this.apiEndpoint + 'list/' + _id, this.options)
      .map(res => <any[]>res.json());
  }
}
