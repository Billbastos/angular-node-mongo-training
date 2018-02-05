import { Message } from './message.model';
import { Component, OnInit } from "@angular/core";
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <app-message 
        [inputMessage]="message" 
        (editClicked)="message.content = $event"
        *ngFor="let message of messages"></app-message>
    </div>
  `
})
export class MessageListComponent implements OnInit {
  private messages: Message[];

  constructor(private messageService: MessageService){}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }
  
}