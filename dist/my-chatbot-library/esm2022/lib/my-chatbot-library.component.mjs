import { Component, Input } from '@angular/core';
import { filter, fromEvent } from 'rxjs';
import { ChatbotIconComponent } from './chatbot-icon/chatbot-icon.component';
import { ChatbotTextboxComponent } from './chatbot-textbox/chatbot-textbox.component';
import * as i0 from "@angular/core";
export class MyChatbotLibraryComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY2hhdGJvdC1saWJyYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNoYXRib3QtbGlicmFyeS9zcmMvbGliL215LWNoYXRib3QtbGlicmFyeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1jaGF0Ym90LWxpYnJhcnkvc3JjL2xpYi9teS1jaGF0Ym90LWxpYnJhcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFnQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQVN0RixNQUFNLE9BQU8seUJBQXlCO0lBUHRDO1FBWUUsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFFckIsa0JBQWEsR0FBRyxTQUFTLENBQWdCLFFBQVEsRUFBRyxTQUFTLENBQUMsQ0FBQztLQW1DekU7SUFoQ0MsV0FBVztRQUNULElBQUcsSUFBSSxDQUFDLFdBQVcsRUFDbkIsQ0FBQztZQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsZ0JBQWdCO1FBRWQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGNBQWM7UUFFWixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU8sd0JBQXdCO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDckMsSUFBSSxDQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksUUFBUSxDQUFDLENBQ3ZDO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQXhDVSx5QkFBeUI7bUdBQXpCLHlCQUF5QixvSUNidEMseVZBWUUsMERESFUsb0JBQW9CLG1IQUFHLHVCQUF1Qjs7NEZBSTdDLHlCQUF5QjtrQkFQckMsU0FBUzsrQkFDRSx3QkFBd0IsY0FDdEIsSUFBSSxXQUNQLENBQUMsb0JBQW9CLEVBQUcsdUJBQXVCLENBQUM7OEJBTS9CLEtBQUs7c0JBQTlCLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUcsSUFBSSxFQUFDO2dCQUNFLFFBQVE7c0JBQWpDLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUcsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXRib3RJY29ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9saWJyYXJ5LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZmlsdGVyLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ2hhdGJvdEljb25Db21wb25lbnQgfSBmcm9tICcuL2NoYXRib3QtaWNvbi9jaGF0Ym90LWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdGJvdFRleHRib3hDb21wb25lbnQgfSBmcm9tICcuL2NoYXRib3QtdGV4dGJveC9jaGF0Ym90LXRleHRib3guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW15LWNoYXRib3QtbGlicmFyeScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ2hhdGJvdEljb25Db21wb25lbnQgLCBDaGF0Ym90VGV4dGJveENvbXBvbmVudF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL215LWNoYXRib3QtbGlicmFyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL215LWNoYXRib3QtbGlicmFyeS5jb21wb25lbnQuY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlDaGF0Ym90TGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveXtcclxuXHJcbiAgQElucHV0KHtyZXF1aXJlZCA6IHRydWV9KSBpY29ucyAhOiBDaGF0Ym90SWNvbnM7XHJcbiAgQElucHV0KHtyZXF1aXJlZCA6IHRydWV9KSBiYXNlUGF0aCAhOiBzdHJpbmc7XHJcblxyXG4gIHNob3dUZXh0Qm94IDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICByZWFkb25seSBrZXlEb3duRXZlbnQkID0gZnJvbUV2ZW50PEtleWJvYXJkRXZlbnQ+KGRvY3VtZW50ICwgJ2tleWRvd24nKTtcclxuICBwcml2YXRlIGtleUlucHV0U3ViICE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLmtleUlucHV0U3ViKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmtleUlucHV0U3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL01ldGhvZCBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNoYXRib3QgaWNvbiBpcyBjbGlja2VkXHJcbiAgb25DaGF0Ym90Q2xpY2tlZCgpIDogdm9pZFxyXG4gIHtcclxuICAgIHRoaXMuc2hvd1RleHRCb3ggPSB0cnVlO1xyXG4gICAgdGhpcy5fc3Vic2NyaWJlVG9LZXlkb3duRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xvc2VDaGF0Ym90KCkgOiB2b2lkXHJcbiAge1xyXG4gICAgdGhpcy5zaG93VGV4dEJveCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9LZXlkb3duRXZlbnQoKSA6IHZvaWRcclxuICB7XHJcbiAgICB0aGlzLmtleUlucHV0U3ViID0gdGhpcy5rZXlEb3duRXZlbnQkLlxyXG4gICAgcGlwZVxyXG4gICAgKFxyXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQua2V5ID09PSdFc2NhcGUnKVxyXG4gICAgKVxyXG4gICAgLnN1YnNjcmliZSgoKSA9PntcclxuICAgICAgdGhpcy5zaG93VGV4dEJveCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmtleUlucHV0U3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIkBpZiAoIXNob3dUZXh0Qm94KXtcclxuICAgIDxsaWItY2hhdGJvdC1pY29uIFtpY29uQ2hhdGJvdF09XCJpY29ucy5jaGF0Ym90SWNvblwiXHJcbiAgICAoY2hhdGJvdENsaWNrZWQpPVwib25DaGF0Ym90Q2xpY2tlZCgpXCJcclxuICAgID48L2xpYi1jaGF0Ym90LWljb24+XHJcbn1AZWxzZSB7XHJcbiAgICA8bGliLWNoYXRib3QtdGV4dGJveCBcclxuICAgIFtpY29uc109XCJpY29uc1wiXHJcbiAgICBbYmFzZVBhdGhdPVwiYmFzZVBhdGhcIlxyXG4gICAgKGNsb3NlQ2hhdGJvdCk9XCJvbkNsb3NlQ2hhdGJvdCgpXCJcclxuICAgID48L2xpYi1jaGF0Ym90LXRleHRib3g+XHJcbn1cclxuICBcclxuICAiXX0=