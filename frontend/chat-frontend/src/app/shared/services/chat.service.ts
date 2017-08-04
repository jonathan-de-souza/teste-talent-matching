//improts do angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//imports services
import { HttpClient } from "./http-client.service";

import { Chats } from "../mock/mock";

@Injectable()
export class ChatService {

  private api: string = 'chat';

  constructor(private _httpClient: HttpClient) { }

  getChats(): Observable<any> {
    let pathResource = `http://localhost:3000/${this.api}/getAll`;

    return this._httpClient.get(pathResource).map((res: Response) => res.json());
  }

  getChat(ChatId: number): Observable<any> {
    return Observable.create(observer => {
      let chat = Chats.find(x => x.ChatID == ChatId);
      observer.next(chat);
      return observer.complete();
    });
  }

  addNewUser(nickName: string): Observable<any> {

    var obj = { nickname: nickName };

    let pathResource = `http://localhost:3000/${this.api}/newUser`;

    return this._httpClient.post(pathResource, JSON.stringify(obj)).map((res: Response) => res.json());
  }

  addNewMember(chat: any): Observable<any> {
    let pathResource = `http://localhost:3000/${this.api}/addMember/${chat.id}`;

    return this._httpClient.put(pathResource, JSON.stringify(chat)).map((res: Response) => res.json());
  }

  addNewMessage(message: any, id): Observable<any> {
    let pathResource = `http://localhost:3000/${this.api}/addNewMessage/${id}`;

    return this._httpClient.put(pathResource, JSON.stringify(message)).map((res: Response) => res.json());

  }

}
