import { Component } from '@angular/core';
import { ChatbotIcons, MyChatbotLibraryComponent } from 'my-chatbot-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyChatbotLibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbot-test';

  icons : ChatbotIcons = 
  {
    chatbotIcon : '../assets/icons/chatbot.svg',
    userIcon : '../assets/icons/user.svg'
  };
  basePath : string = 'http://localhost:8000/ask';
}
