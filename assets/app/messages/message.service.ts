import { Http, Response, Headers } from "@angular/http";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

@Injectable() // enable Http Service to be injected in the constructor
export class MessageService {
  private messages: Message[] = [];
  @Output() messageIsEdit = new EventEmitter<Message>();

  constructor(private http: Http, private errorService: ErrorService){}

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
    return this.http.post('https://gui-angular2-udemy.herokuapp.com/message'+token, body, {headers: headers})
        .map((response: Response) => {
          const result = response.json();
          console.log(`the result: ${result.obj.user}`);
          const message = new Message(
            result.obj.content, 
            result.obj.user.firstName, 
            result.obj._id, 
            result.obj.user._id
          );
          this.messages.push(message);
          return message;
        })
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error);
        });
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
    return this.http.patch('https://gui-angular2-udemy.herokuapp.com/message/' + message.messageId + token, body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error);
        });
  }

  getMessages() {
    return this.http.get('https://gui-angular2-udemy.herokuapp.com/message')
      .map((response: Response) => {
        const messages = response.json().obj;
        let transformedMessages: Message[] = [];
        for(let message of messages) {
          transformedMessages.push(new Message(
            message.content, 
            message.user.firstName, 
            message._id, 
            message.user._id)
          );
        }
        this.messages = transformedMessages;
        return transformedMessages;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error);
      })
  }

  deteleMessage(message: Message) {
    
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
    return this.http.delete('https://gui-angular2-udemy.herokuapp.com/message/'+ message.messageId + token)
        .map((response: Response)=> {
          this.messages.splice(this.messages.indexOf(message), 1);
          return response.json();
        })
        .catch((error: Response)=> {
          this.errorService.handleError(error.json());
          return Observable.throw(error);
        });
  }
}