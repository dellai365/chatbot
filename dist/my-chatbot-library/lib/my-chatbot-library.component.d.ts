import { OnDestroy } from '@angular/core';
import { ChatbotIcons } from './interfaces/library.interface';
import * as i0 from "@angular/core";
export declare class MyChatbotLibraryComponent implements OnDestroy {
    icons: ChatbotIcons;
    basePath: string;
    showTextBox: boolean;
    readonly keyDownEvent$: import("rxjs").Observable<KeyboardEvent>;
    private keyInputSub;
    ngOnDestroy(): void;
    onChatbotClicked(): void;
    onCloseChatbot(): void;
    private _subscribeToKeydownEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyChatbotLibraryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyChatbotLibraryComponent, "lib-my-chatbot-library", never, { "icons": { "alias": "icons"; "required": true; }; "basePath": { "alias": "basePath"; "required": true; }; }, {}, never, never, true, never>;
}
