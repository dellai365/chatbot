import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ChatbotIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdGJvdC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNoYXRib3QtbGlicmFyeS9zcmMvbGliL2NoYXRib3QtaWNvbi9jaGF0Ym90LWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2hhdGJvdC1saWJyYXJ5L3NyYy9saWIvY2hhdGJvdC1pY29uL2NoYXRib3QtaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVN2RSxNQUFNLE9BQU8sb0JBQW9CO0lBUGpDO1FBVVksbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0tBT3JEO0lBTEMsb0JBQW9CO1FBRWxCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzsrR0FSVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixtS0NUakMsMktBR0U7OzRGRE1XLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxrQkFBa0IsY0FDaEIsSUFBSSxXQUNQLEVBQUU7OEJBTWUsV0FBVztzQkFBcEMsS0FBSzt1QkFBQyxFQUFDLFFBQVEsRUFBRyxJQUFJLEVBQUM7Z0JBQ2QsY0FBYztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jaGF0Ym90LWljb24nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXRib3QtaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2NoYXRib3QtaWNvbi5jb21wb25lbnQuY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdGJvdEljb25Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoe3JlcXVpcmVkIDogdHJ1ZX0pIGljb25DaGF0Ym90ICE6IHN0cmluZztcclxuICBAT3V0cHV0KCkgY2hhdGJvdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIG9uQ2xpY2tlZENoYXRib3RJY29uKCkgOiB2b2lkXHJcbiAge1xyXG4gICAgdGhpcy5jaGF0Ym90Q2xpY2tlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY2hhdGJvdC1pY29uLWNvbnRhaW5lclwiPlxyXG4gICAgPGltZyBbc3JjXT1cImljb25DaGF0Ym90XCIgY2xhc3M9XCJzdmctY29udGFpbmVyXCIgYWx0PVwiQ2hhdGJvdCBpY29uXCIgKGNsaWNrKT1cIm9uQ2xpY2tlZENoYXRib3RJY29uKClcIj5cclxuPC9kaXY+XHJcbiAgIl19