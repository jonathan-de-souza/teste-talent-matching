//imports do angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareDataService {
  private selectedChat: Subject<any> = new Subject<any>();

  constructor() { }

  setSelectedChat(_selectedChat) {
    this.selectedChat.next(_selectedChat);
  }

  getSelectedChat(): Observable<any> {
    return this.selectedChat.asObservable();
  }

}
