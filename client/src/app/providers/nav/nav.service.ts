import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavService {
  private subject = new Subject<any>();
 
  sendMessage(message: boolean) {
    this.subject.next({ authd: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }

}
