import { Component, Input, OnDestroy } from '@angular/core';
import { ChatbotIcons } from './interfaces/library.interface';
import { Subscription, filter, fromEvent } from 'rxjs';
import { ChatbotIconComponent } from './chatbot-icon/chatbot-icon.component';
import { ChatbotTextboxComponent } from './chatbot-textbox/chatbot-textbox.component';
import { ChatService } from './chat.service'; // Add this import

@Component({
  selector: 'lib-my-chatbot-library',
  standalone: true,
  imports: [ChatbotIconComponent, ChatbotTextboxComponent],
  templateUrl: './my-chatbot-library.component.html',
  styleUrl: './my-chatbot-library.component.css'
})
export class MyChatbotLibraryComponent implements OnDestroy {

  @Input({ required: true }) icons!: ChatbotIcons;
  @Input({ required: true }) basePath!: string;

  showTextBox: boolean = false;
  botResponse: string = '';

  readonly keyDownEvent$ = fromEvent<KeyboardEvent>(document, 'keydown');
  private keyInputSub!: Subscription;

  constructor(private chatService: ChatService) {} // Inject service

  ngOnDestroy(): void {
    if (this.keyInputSub) {
      this.keyInputSub.unsubscribe();
    }
  }

  // When chatbot icon is clicked
  onChatbotClicked(): void {
    this.showTextBox = true;
    this._subscribeToKeydownEvent();
  }

  onCloseChatbot(): void {
    this.showTextBox = false;
  }

  private _subscribeToKeydownEvent(): void {
    this.keyInputSub = this.keyDownEvent$
      .pipe(filter(event => event.key === 'Escape'))
      .subscribe(() => {
        this.showTextBox = false;
        this.keyInputSub.unsubscribe();
      });
  }

  // 🔥 New method: triggered when the textbox emits a message
  onUserMessage(message: string): void {
    if (!message.trim()) return;

    this.chatService.askQuestion(message).subscribe({
      next: (res) => {
        this.botResponse = res.response;
        console.log('Bot:', this.botResponse);
        // Optional: pass this to textbox or show in a message list
      },
      error: (err) => {
        console.error('Error from API:', err);
        this.botResponse = 'Error contacting the chatbot.';
      }
    });
  }
}
