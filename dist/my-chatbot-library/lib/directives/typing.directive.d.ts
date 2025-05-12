import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TypingDirective implements OnInit, OnDestroy {
    private el;
    private renderer;
    text: string;
    nativeContainer: HTMLElement;
    timer: import("rxjs").Observable<number>;
    timerSub: Subscription;
    index: number;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private _applyTypingEffect;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TypingDirective, "[libTyping]", never, { "text": { "alias": "text"; "required": true; }; "nativeContainer": { "alias": "nativeContainer"; "required": false; }; }, {}, never, never, true, never>;
}
