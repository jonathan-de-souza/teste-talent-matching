//imports do angular
import { Component, OnInit } from '@angular/core';

//imports components
import { ChatComponent } from "../chat/chat.component";
import { ChatListComponent } from "../chat-list/chat-list.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
