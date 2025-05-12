import { ElementRef, EventEmitter } from '@angular/core';
import { ChatbotIcons, ChatbotMsg } from '../interfaces/library.interface';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class ChatbotTextboxComponent {
    private http;
    bodyContainer: ElementRef;
    icons: ChatbotIcons;
    basePath: string;
    closeChatbot: EventEmitter<void>;
    readonly welcomeMessage: string;
    readonly errorMessage: string;
    inputText: string | undefined;
    waitingResponse: boolean;
    errorResponse: boolean;
    listOfMessages: ChatbotMsg[];
    constructor(http: HttpClient);
    getIcon(ind: number): string;
    onCloseChatbot(): void;
    onSendForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChatbotTextboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChatbotTextboxComponent, "lib-chatbot-textbox", never, { "icons": { "alias": "icons"; "required": true; }; "basePath": { "alias": "basePath"; "required": true; }; }, { "closeChatbot": "closeChatbot"; }, never, never, true, never>;
}
