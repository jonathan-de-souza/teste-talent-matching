//imports do angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

//imports modulos
import { Routing } from './app.routes';

//imports components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';

//imports services
import { ChatService } from "./shared/services/chat.service";
import { ShareDataService } from "./shared/services/share-data.service";
import { HttpClient } from "./shared/services/http-client.service";

//imports plugins

import { CoolLocalStorage } from 'angular2-cool-storage';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { BlockUIModule } from 'ng-block-ui';
import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatListComponent,
    ChatComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    BlockUIModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ChatService,
    ShareDataService,
    HttpClient,
    NotificationsService,
    CoolLocalStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
