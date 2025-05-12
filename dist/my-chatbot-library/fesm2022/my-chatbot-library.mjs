import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, Directive, ViewChild } from '@angular/core';
import { interval, takeWhile, fromEvent, filter } from 'rxjs';
import { NgStyle, NgClass } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i1 from '@angular/common/http';

class ChatbotIconComponent {
    constructor() {
        this.chatbotClicked = new EventEmitter();
    }
    onClickedChatbotIcon() {
        this.chatbotClicked.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ChatbotIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ChatbotIconComponent, isStandalone: true, selector: "lib-chatbot-icon", inputs: { iconChatbot: "iconChatbot" }, outputs: { chatbotClicked: "chatbotClicked" }, ngImport: i0, template: "<div class=\"chatbot-icon-container\">\r\n    <img [src]=\"iconChatbot\" class=\"svg-container\" alt=\"Chatbot icon\" (click)=\"onClickedChatbotIcon()\">\r\n</div>\r\n  ", styles: [".chatbot-icon-container{position:absolute;height:4rem;aspect-ratio:1/1;display:flex;justify-content:center;align-items:center;bottom:20px;right:20px}.svg-container{background-color:var(--bg-chatbot-icon-container);width:100%;height:100%;border-radius:50%;cursor:pointer;padding:.5rem}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ChatbotIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-chatbot-icon', standalone: true, imports: [], template: "<div class=\"chatbot-icon-container\">\r\n    <img [src]=\"iconChatbot\" class=\"svg-container\" alt=\"Chatbot icon\" (click)=\"onClickedChatbotIcon()\">\r\n</div>\r\n  ", styles: [".chatbot-icon-container{position:absolute;height:4rem;aspect-ratio:1/1;display:flex;justify-content:center;align-items:center;bottom:20px;right:20px}.svg-container{background-color:var(--bg-chatbot-icon-container);width:100%;height:100%;border-radius:50%;cursor:pointer;padding:.5rem}\n"] }]
        }], propDecorators: { iconChatbot: [{
                type: Input,
                args: [{ required: true }]
            }], chatbotClicked: [{
                type: Output
            }] } });

class TypingDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.timer = interval(30);
        this.index = 0;
    }
    ngOnInit() {
        this._applyTypingEffect();
    }
    _applyTypingEffect() {
        this.el.nativeElement.textContent = '';
        this.timerSub = this.timer.pipe(takeWhile(() => this.index <= this.text.length))
            .subscribe(() => {
            this.el.nativeElement.textContent += this.text.charAt(this.index);
            this.nativeContainer.scrollTop = this.nativeContainer.scrollHeight;
            this.index = this.index + 1;
        });
    }
    ngOnDestroy() {
        if (this.timerSub) {
            this.timerSub.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TypingDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: TypingDirective, isStandalone: true, selector: "[libTyping]", inputs: { text: "text", nativeContainer: "nativeContainer" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TypingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[libTyping]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { text: [{
                type: Input,
                args: [{ required: true }]
            }], nativeContainer: [{
                type: Input,
                args: [{ required: false }]
            }] } });

class ChatbotTextboxComponent {
    constructor(http) {
        this.http = http;
        this.closeChatbot = new EventEmitter();
        this.welcomeMessage = 'Hello I\'m Manu your virtual assistant. How can I help you?';
        this.errorMessage = 'Something went wront. Please try later';
        this.waitingResponse = false;
        this.errorResponse = false;
        this.listOfMessages = [
            { role: 'assistant', content: this.welcomeMessage }
        ];
    }
    getIcon(ind) {
        return (ind == 0 || ind % 2 == 0) ? this.icons.chatbotIcon : this.icons.userIcon;
    }
    onCloseChatbot() {
        this.closeChatbot.emit();
    }
    onSendForm() {
        if (this.inputText != undefined) {
            this.listOfMessages.push({ role: 'user', content: this.inputText });
            this.inputText = undefined;
            this.waitingResponse = true;
            //Remove the welcome message
            const request = { model: "gpt-3.5-turbo", messages: this.listOfMessages.slice(1) };
            //Do the call
            this.http.post(this.basePath, request)
                .subscribe({
                next: (res) => {
                    this.waitingResponse = false;
                    if (res.content) {
                        this.listOfMessages.push({ role: 'assistant', content: res.content });
                    }
                },
                error: (err) => {
                    this.waitingResponse = false;
                    this.errorResponse = true;
                    this.listOfMessages.push({ role: 'assistant', content: this.errorMessage });
                }
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ChatbotTextboxComponent, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: ChatbotTextboxComponent, isStandalone: true, selector: "lib-chatbot-textbox", inputs: { icons: "icons", basePath: "basePath" }, outputs: { closeChatbot: "closeChatbot" }, viewQueries: [{ propertyName: "bodyContainer", first: true, predicate: ["bodyChatbotContainer"], descendants: true }], ngImport: i0, template: "<div class=\"header\">\r\n    <p class=\"header-text\">My chatbot title</p>\r\n    <span class=\"icon-right\"\r\n    (click)=\"onCloseChatbot()\">\r\n      <i class=\"pi pi-times\"></i>\r\n    </span>\r\n  </div>\r\n  \r\n  <div #bodyChatbotContainer \r\n  class=\"body\">\r\n  \r\n  \r\n    @for (chat of  listOfMessages ; track chat; let index=$index )\r\n    {\r\n      <div class=\"chat-container-message\"\r\n      [ngStyle]=\"{'flex-direction': index === 0 || index % 2 === 0 ? 'row' : 'row-reverse'}\"\r\n      >\r\n        <img [src]=\"getIcon(index)\" class=\"svg-container\" alt=\"\" \r\n        [ngClass]=\"index === 0 || index % 2 === 0 ? 'chatbot-icon' : 'user-icon' \" >\r\n        @if(index == 0)\r\n        {\r\n          <p class=\"chatbot-text chat-message\">{{chat.content}}</p>\r\n        }@else {\r\n          @if (index % 2 == 0) {\r\n            <p libTyping [text]=\"chat.content\"\r\n            [ngClass]=\"errorResponse ? 'chat-error' : 'chat-message' \"\r\n            [nativeContainer]=\"bodyChatbotContainer\"\r\n            class=\"chatbot-text\">\r\n              {{chat.content}}\r\n            </p>          \r\n          } @else {\r\n            <p class=\"chatbot-text user-message\">{{chat.content}}</p>\r\n          }\r\n  \r\n        }\r\n      </div>\r\n    }\r\n  \r\n    @if(waitingResponse)\r\n    {  \r\n      <div class=\"chat-container-message\">\r\n        <img [src]=\"icons.chatbotIcon\" class=\"svg-container chatbot-icon\" alt=\"\">\r\n        <div class=\"spinner\">\r\n          <div class=\"bounce1\"></div>\r\n          <div class=\"bounce2\"></div>\r\n          <div class=\"bounce3\"></div>\r\n        </div>\r\n      </div>\r\n    }\r\n  \r\n  </div>\r\n  \r\n  <hr class=\"horizontal-line\">\r\n  <div class=\"footer\">\r\n  \r\n    <input type=\"text\" pInputText\r\n    placeholder=\"Write here your message...\"\r\n    [disabled]=\"waitingResponse\"\r\n    [style]=\"{'border-radius' : '20px' , 'font-size' : 'small' , 'width' : '85%'}\"\r\n    [(ngModel)]=\"inputText\"\r\n    (keydown.enter)=\"onSendForm()\"\r\n    />\r\n  \r\n    <div class=\"send-icon-container\"\r\n    [class.disabled-icon]=\"!inputText\"\r\n    (click)=\"onSendForm()\">\r\n      <i class=\"pi pi-send\"></i>\r\n    </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  ", styles: [":host{width:25rem;height:35rem;display:flex;flex-direction:column;overflow:hidden;border-radius:10px;position:absolute;right:1rem;bottom:2rem;background-color:var(--bg-textbox);box-shadow:#00000026 1.95px 1.95px 2.6px;animation:onEnter .5s ease-in forwards}.header{height:15%;background-color:var(--bg-header-chatbot-box-message);color:var(--color-header-chatbot-box-message);display:inline-flex;align-items:center;justify-content:center;font-weight:600;padding:.25rem .5rem;position:relative}.header-text{font-size:large;width:90%;text-align:center}.icon-right{position:absolute;right:10px;font-size:large;cursor:pointer;padding:.25rem;width:40px;height:auto;aspect-ratio:1/1;display:flex;justify-content:center;align-items:center}.icon-right:hover{border:1px solid white;border-radius:50%}.body{height:75%;width:100%;padding:1rem;display:flex;flex-direction:column;overflow:auto;row-gap:1.5rem}.body::-webkit-scrollbar{width:10px}.body::-webkit-scrollbar-track{box-shadow:inset 0 0 5px var(--gray-400);border-radius:10px}.body::-webkit-scrollbar-thumb{background:var(--chatbot-scrollbar-color);border-radius:10px}.spinner{margin-left:20px;display:flex;column-gap:15px;height:100%;align-items:center}.spinner>div{width:12px;height:12px;background-color:var(--surface-700);border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.7s infinite ease-in-out both;animation:sk-bouncedelay 1.47 infinite ease-in-out both}.spinner .bounce1{-webkit-animation-delay:-.64s;animation-delay:-.64s}.spinner .bounce2{-webkit-animation-delay:-.32s;animation-delay:-.32s}.horizontal-line{width:calc(100% - 2rem);border-color:var(--bg-header-chatbot-box-message);transform:translateY(10px)}.chat-container-message{display:flex;align-items:flex-start;column-gap:10px}.svg-container{width:35px;height:35px;border-radius:50%}.chatbot-text{color:var(--teal-700);background-color:#fff;border-radius:10px;border:1px solid var(--bg-chatbot-icon-container);text-align:justify;font-size:small;font-weight:500;width:calc(100% - 80px);margin:0;padding:.5rem .8rem;min-height:100%}.chat-message{background-color:var(--bg-chatbot-icon-container);color:var(--color-chatbot-message)}.chat-error{background-color:#3e4652!important;color:#fff!important}.user-message{background-color:var(--bg-user-icon-container);color:var(--color-user-message)}.chatbot-icon{background-color:var(--bg-chatbot-icon-container);padding:.3rem}.user-icon{padding:.3rem;border:2px solid var(--bg-chatbot-icon-container);background-color:var(--bg-user-icon-container)}.footer{height:fit-content;display:inline-flex;justify-content:space-between;padding:1rem}.send-icon-container{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--surface-700);color:#fff;height:100%;aspect-ratio:1/1;cursor:pointer}.send-icon-container:hover{border:1px solid var(--bg-header-chatbot-box-message)}.disabled-icon{color:#fff;cursor:not-allowed;background-color:var(--surface-700);opacity:.6}@-webkit-keyframes sk-bouncedelay{0%,80%,to{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes onEnter{0%{opacity:0}to{opacity:1}}@keyframes onLeave{0%{opacity:1}to{opacity:0}}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: TypingDirective, selector: "[libTyping]", inputs: ["text", "nativeContainer"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i3.InputText, selector: "[pInputText]", inputs: ["variant"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ChatbotTextboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-chatbot-textbox', standalone: true, imports: [NgStyle, NgClass, TypingDirective, FormsModule, InputTextModule], template: "<div class=\"header\">\r\n    <p class=\"header-text\">My chatbot title</p>\r\n    <span class=\"icon-right\"\r\n    (click)=\"onCloseChatbot()\">\r\n      <i class=\"pi pi-times\"></i>\r\n    </span>\r\n  </div>\r\n  \r\n  <div #bodyChatbotContainer \r\n  class=\"body\">\r\n  \r\n  \r\n    @for (chat of  listOfMessages ; track chat; let index=$index )\r\n    {\r\n      <div class=\"chat-container-message\"\r\n      [ngStyle]=\"{'flex-direction': index === 0 || index % 2 === 0 ? 'row' : 'row-reverse'}\"\r\n      >\r\n        <img [src]=\"getIcon(index)\" class=\"svg-container\" alt=\"\" \r\n        [ngClass]=\"index === 0 || index % 2 === 0 ? 'chatbot-icon' : 'user-icon' \" >\r\n        @if(index == 0)\r\n        {\r\n          <p class=\"chatbot-text chat-message\">{{chat.content}}</p>\r\n        }@else {\r\n          @if (index % 2 == 0) {\r\n            <p libTyping [text]=\"chat.content\"\r\n            [ngClass]=\"errorResponse ? 'chat-error' : 'chat-message' \"\r\n            [nativeContainer]=\"bodyChatbotContainer\"\r\n            class=\"chatbot-text\">\r\n              {{chat.content}}\r\n            </p>          \r\n          } @else {\r\n            <p class=\"chatbot-text user-message\">{{chat.content}}</p>\r\n          }\r\n  \r\n        }\r\n      </div>\r\n    }\r\n  \r\n    @if(waitingResponse)\r\n    {  \r\n      <div class=\"chat-container-message\">\r\n        <img [src]=\"icons.chatbotIcon\" class=\"svg-container chatbot-icon\" alt=\"\">\r\n        <div class=\"spinner\">\r\n          <div class=\"bounce1\"></div>\r\n          <div class=\"bounce2\"></div>\r\n          <div class=\"bounce3\"></div>\r\n        </div>\r\n      </div>\r\n    }\r\n  \r\n  </div>\r\n  \r\n  <hr class=\"horizontal-line\">\r\n  <div class=\"footer\">\r\n  \r\n    <input type=\"text\" pInputText\r\n    placeholder=\"Write here your message...\"\r\n    [disabled]=\"waitingResponse\"\r\n    [style]=\"{'border-radius' : '20px' , 'font-size' : 'small' , 'width' : '85%'}\"\r\n    [(ngModel)]=\"inputText\"\r\n    (keydown.enter)=\"onSendForm()\"\r\n    />\r\n  \r\n    <div class=\"send-icon-container\"\r\n    [class.disabled-icon]=\"!inputText\"\r\n    (click)=\"onSendForm()\">\r\n      <i class=\"pi pi-send\"></i>\r\n    </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  ", styles: [":host{width:25rem;height:35rem;display:flex;flex-direction:column;overflow:hidden;border-radius:10px;position:absolute;right:1rem;bottom:2rem;background-color:var(--bg-textbox);box-shadow:#00000026 1.95px 1.95px 2.6px;animation:onEnter .5s ease-in forwards}.header{height:15%;background-color:var(--bg-header-chatbot-box-message);color:var(--color-header-chatbot-box-message);display:inline-flex;align-items:center;justify-content:center;font-weight:600;padding:.25rem .5rem;position:relative}.header-text{font-size:large;width:90%;text-align:center}.icon-right{position:absolute;right:10px;font-size:large;cursor:pointer;padding:.25rem;width:40px;height:auto;aspect-ratio:1/1;display:flex;justify-content:center;align-items:center}.icon-right:hover{border:1px solid white;border-radius:50%}.body{height:75%;width:100%;padding:1rem;display:flex;flex-direction:column;overflow:auto;row-gap:1.5rem}.body::-webkit-scrollbar{width:10px}.body::-webkit-scrollbar-track{box-shadow:inset 0 0 5px var(--gray-400);border-radius:10px}.body::-webkit-scrollbar-thumb{background:var(--chatbot-scrollbar-color);border-radius:10px}.spinner{margin-left:20px;display:flex;column-gap:15px;height:100%;align-items:center}.spinner>div{width:12px;height:12px;background-color:var(--surface-700);border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.7s infinite ease-in-out both;animation:sk-bouncedelay 1.47 infinite ease-in-out both}.spinner .bounce1{-webkit-animation-delay:-.64s;animation-delay:-.64s}.spinner .bounce2{-webkit-animation-delay:-.32s;animation-delay:-.32s}.horizontal-line{width:calc(100% - 2rem);border-color:var(--bg-header-chatbot-box-message);transform:translateY(10px)}.chat-container-message{display:flex;align-items:flex-start;column-gap:10px}.svg-container{width:35px;height:35px;border-radius:50%}.chatbot-text{color:var(--teal-700);background-color:#fff;border-radius:10px;border:1px solid var(--bg-chatbot-icon-container);text-align:justify;font-size:small;font-weight:500;width:calc(100% - 80px);margin:0;padding:.5rem .8rem;min-height:100%}.chat-message{background-color:var(--bg-chatbot-icon-container);color:var(--color-chatbot-message)}.chat-error{background-color:#3e4652!important;color:#fff!important}.user-message{background-color:var(--bg-user-icon-container);color:var(--color-user-message)}.chatbot-icon{background-color:var(--bg-chatbot-icon-container);padding:.3rem}.user-icon{padding:.3rem;border:2px solid var(--bg-chatbot-icon-container);background-color:var(--bg-user-icon-container)}.footer{height:fit-content;display:inline-flex;justify-content:space-between;padding:1rem}.send-icon-container{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--surface-700);color:#fff;height:100%;aspect-ratio:1/1;cursor:pointer}.send-icon-container:hover{border:1px solid var(--bg-header-chatbot-box-message)}.disabled-icon{color:#fff;cursor:not-allowed;background-color:var(--surface-700);opacity:.6}@-webkit-keyframes sk-bouncedelay{0%,80%,to{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes onEnter{0%{opacity:0}to{opacity:1}}@keyframes onLeave{0%{opacity:1}to{opacity:0}}\n"] }]
        }], ctorParameters: () => [{ type: i1.HttpClient }], propDecorators: { bodyContainer: [{
                type: ViewChild,
                args: ['bodyChatbotContainer', { static: false }]
            }], icons: [{
                type: Input,
                args: [{ required: true }]
            }], basePath: [{
                type: Input,
                args: [{ required: true }]
            }], closeChatbot: [{
                type: Output
            }] } });

class MyChatbotLibraryComponent {
    constructor() {
        this.showTextBox = false;
        this.keyDownEvent$ = fromEvent(document, 'keydown');
    }
    ngOnDestroy() {
        if (this.keyInputSub) {
            this.keyInputSub.unsubscribe();
        }
    }
    //Method called whenever the chatbot icon is clicked
    onChatbotClicked() {
        this.showTextBox = true;
        this._subscribeToKeydownEvent();
    }
    onCloseChatbot() {
        this.showTextBox = false;
    }
    _subscribeToKeydownEvent() {
        this.keyInputSub = this.keyDownEvent$.
            pipe(filter(event => event.key === 'Escape'))
            .subscribe(() => {
            this.showTextBox = false;
            this.keyInputSub.unsubscribe();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyChatbotLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: MyChatbotLibraryComponent, isStandalone: true, selector: "lib-my-chatbot-library", inputs: { icons: "icons", basePath: "basePath" }, ngImport: i0, template: "@if (!showTextBox){\r\n    <lib-chatbot-icon [iconChatbot]=\"icons.chatbotIcon\"\r\n    (chatbotClicked)=\"onChatbotClicked()\"\r\n    ></lib-chatbot-icon>\r\n}@else {\r\n    <lib-chatbot-textbox \r\n    [icons]=\"icons\"\r\n    [basePath]=\"basePath\"\r\n    (closeChatbot)=\"onCloseChatbot()\"\r\n    ></lib-chatbot-textbox>\r\n}\r\n  \r\n  ", styles: [""], dependencies: [{ kind: "component", type: ChatbotIconComponent, selector: "lib-chatbot-icon", inputs: ["iconChatbot"], outputs: ["chatbotClicked"] }, { kind: "component", type: ChatbotTextboxComponent, selector: "lib-chatbot-textbox", inputs: ["icons", "basePath"], outputs: ["closeChatbot"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyChatbotLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-chatbot-library', standalone: true, imports: [ChatbotIconComponent, ChatbotTextboxComponent], template: "@if (!showTextBox){\r\n    <lib-chatbot-icon [iconChatbot]=\"icons.chatbotIcon\"\r\n    (chatbotClicked)=\"onChatbotClicked()\"\r\n    ></lib-chatbot-icon>\r\n}@else {\r\n    <lib-chatbot-textbox \r\n    [icons]=\"icons\"\r\n    [basePath]=\"basePath\"\r\n    (closeChatbot)=\"onCloseChatbot()\"\r\n    ></lib-chatbot-textbox>\r\n}\r\n  \r\n  " }]
        }], propDecorators: { icons: [{
                type: Input,
                args: [{ required: true }]
            }], basePath: [{
                type: Input,
                args: [{ required: true }]
            }] } });

;
;
;
;

/*
 * Public API Surface of my-chatbot-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyChatbotLibraryComponent };
//# sourceMappingURL=my-chatbot-library.mjs.map
