//imports do angular
import { Component, OnInit } from '@angular/core';

//imports services
import { ChatService } from "../shared/services/chat.service";
import { ShareDataService } from "../shared/services/share-data.service";

//imports components
import { UtilsComponent } from "../shared/components/utils.component";

//imports plugins
import { CoolLocalStorage } from "angular2-cool-storage";

//import dtos
import { User } from "../shared/dtos/userDto";
import { Chat } from "../shared/dtos/chatDto";
import { Message } from "../shared/dtos/messageDto";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat: Chat = new Chat;
  messages: Array<Message> = new Array<Message>();
  messageText: string;
  newMessage: Message =  new Message();
  user: User = new User;

  constructor(private _chatService: ChatService,
    private _shareData: ShareDataService,
    private _localStorage: CoolLocalStorage) { }

  ngOnInit() {

    this.user = <User>this._localStorage.getObject("user");

    this._shareData.getSelectedChat().subscribe((res) => {
      this.chat = <Chat>res;
      this.messages = <Array<Message>>res.messages;
    });
  }

  addNewMessage() {
    this.newMessage = new Message();
    if (UtilsComponent.isNullOrEmpty(this.messageText)) {
      alert("Digite uma mensagem");
      return;
    }

    this.newMessage.user = this.user;
    this.newMessage.date = new Date();
    this.newMessage.text = this.messageText;

    this._chatService.addNewMessage(this.newMessage, this.chat.id).subscribe((res) => {
      if (res.message == undefined) {
        this.messages.push(this.newMessage);
        this.messageText = "";
      } else {
        alert(res.message);
      }

    });
  }

}
