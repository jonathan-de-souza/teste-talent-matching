import { User } from "./userDto";
import { Message } from "./messageDto";

export class Chat {
    id: string;
    chatTitle: string;
    members: Array<User> = new Array<User>();
    messages: Array<Message> = new Array<Message>();
    lastMessage: Message;

}

