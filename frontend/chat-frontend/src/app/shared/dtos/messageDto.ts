import { User } from "./userDto";

export class Message {
    id: string;
    text: string;
    user: User;
    date: Date;
}