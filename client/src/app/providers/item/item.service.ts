import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../../../environments/environment';

@Injectable()
export class ItemService {
  private apiEndpoint: string = environment.apiurl;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http) {}

  // POST create item
  create(user_id: string, itemname: string, description: string) : Observable<any> {
    return this.http.post(this.apiEndpoint + 'item', {user_id: user_id, itemname : itemname, description : description}, this.options)
      .map(res => <any[]>res.json());
  }

  getItems(user_id: string) : Observable<any> {
    return this.http.get(this.apiEndpoint + 'items/' + user_id, this.options)
      .map(res => <any[]>res.json());
  }

  delete(_id: string) : Observable<any> {
    return this.http.delete(this.apiEndpoint + 'item/' + _id, this.options)
      .map(res => <any[]>res.json());
  }
}
