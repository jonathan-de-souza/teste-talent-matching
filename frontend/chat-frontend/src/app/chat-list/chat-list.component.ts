//imports do angular
import { Component, OnInit } from '@angular/core';

//imports services
import { ChatService } from "../shared/services/chat.service";
import { ShareDataService } from "../shared/services/share-data.service";

//imports plugins
import { CoolLocalStorage } from "angular2-cool-storage";

//import dtos
import { User } from "../shared/dtos/userDto";
import { Chat } from "../shared/dtos/chatDto";
import { Message } from "../shared/dtos/messageDto";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  chats: Array<Chat> = new Array<Chat>();
  user: User;

  constructor(private _chatService: ChatService,
    private _shareData: ShareDataService,
    private _localStorage: CoolLocalStorage) { }

  ngOnInit() {

    this.user = <User>this._localStorage.getObject("user");

    this._chatService.getChats().subscribe((res) => {
      this.chats = <Array<Chat>>res;

      this.chats.forEach(chat => {
        if (chat.messages != undefined)
          chat.lastMessage = chat.messages.find((item, index) => index == 0);
      });
    });
  }

  selectChat(chat: Chat, e) {

    e.preventDefault();

    chat.members.push(this.user);

    this._chatService.addNewMember(chat).subscribe((res) => {
      if (res.message == undefined) {
        this._shareData.setSelectedChat(res);
      } else {
        alert(res.message);
      }
    });
  }

}
