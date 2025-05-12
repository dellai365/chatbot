import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ChatbotIcons, ChatbotMsg, ChatbotRequest, ChatbotResponse } from '../interfaces/library.interface';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgStyle } from '@angular/common';
import { TypingDirective } from '../directives/typing.directive';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'lib-chatbot-textbox',
  standalone: true,
  imports: [NgStyle, NgClass, TypingDirective , FormsModule , InputTextModule],
  templateUrl: './chatbot-textbox.component.html',
  styleUrl: './chatbot-textbox.component.css'
})
export class ChatbotTextboxComponent {

  @ViewChild('bodyChatbotContainer' , {static : false}) bodyContainer !: ElementRef;

  @Input({required : true}) icons !: ChatbotIcons;
  @Input({required : true}) basePath !: string;
  @Output() closeChatbot = new EventEmitter<void>();

  readonly welcomeMessage : string = 'Hello I\'m Manu your virtual assistant. How can I help you?'
  readonly errorMessage : string = 'Something went wront. Please try later';
  inputText : string | undefined;
  waitingResponse : boolean = false;
  errorResponse : boolean = false;
  listOfMessages : ChatbotMsg[] = 
  [ 
    {role : 'assistant' , content : this.welcomeMessage} 
  ];

  constructor(private http : HttpClient){}

  getIcon(ind : number) : string
  {
    return (ind == 0 || ind % 2 == 0) ?  this.icons.chatbotIcon : this.icons.userIcon
  }

  onCloseChatbot() : void
  {
    this.closeChatbot.emit();
  }

onSendForm(): void {
  if (this.inputText) {
    // Add user's message to UI
    const questionText = this.inputText;
    this.inputText = undefined;
    this.waitingResponse = true;

    // Create the FastAPI payload
    const requestPayload = { question: questionText };

    // Send to FastAPI
    this.http.post<{ response: string }>(this.basePath, requestPayload).subscribe({
      next: (res) => {
        this.waitingResponse = false;
        if (res.response) {
          this.listOfMessages.push({ role: 'assistant', content: res.response });
        }
      },
      error: (err) => {
        this.waitingResponse = false;
        this.errorResponse = true;
        this.listOfMessages.push({ role: 'assistant', content: this.errorMessage });
        console.error('Error from FastAPI:', err);
      }
    });
  }
}

}
