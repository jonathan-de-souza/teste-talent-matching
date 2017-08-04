//imports do angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//imports services
import { ChatService } from "../shared/services/chat.service";
import { ShareDataService } from "../shared/services/share-data.service";

//imports plugins
import { CoolLocalStorage } from "angular2-cool-storage";


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  private nickName: string;

  constructor(private _chatService: ChatService,
   private _router: Router,
   private _localStorage: CoolLocalStorage) { }

  ngOnInit() {
  }

  addNewUser() {
    this._chatService.addNewUser(this.nickName).subscribe((res) => {
      if (res.message == undefined) {
        this._localStorage.setObject("user", res);
        this._router.navigate(['home']);
      } else {
        alert(res.message);
      }
    });
  }

}
