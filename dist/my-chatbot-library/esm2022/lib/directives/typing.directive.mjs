import { Directive, Input } from '@angular/core';
import { interval, takeWhile } from 'rxjs';
import * as i0 from "@angular/core";
export class TypingDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNoYXRib3QtbGlicmFyeS9zcmMvbGliL2RpcmVjdGl2ZXMvdHlwaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFnQixRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU16RCxNQUFNLE9BQU8sZUFBZTtJQVMxQixZQUFvQixFQUFlLEVBQVcsUUFBb0I7UUFBOUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFXLGFBQVEsR0FBUixRQUFRLENBQVk7UUFKbEUsVUFBSyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyQixVQUFLLEdBQVksQ0FBQyxDQUFDO0lBRW1ELENBQUM7SUFFdkUsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxrQkFBa0I7UUFFeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNoRDthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1lBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUcsSUFBSSxDQUFDLFFBQVEsRUFDaEIsQ0FBQztZQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7K0dBakNVLGVBQWU7bUdBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO3VHQUcyQixJQUFJO3NCQUE3QixLQUFLO3VCQUFDLEVBQUMsUUFBUSxFQUFHLElBQUksRUFBQztnQkFDRyxlQUFlO3NCQUF6QyxLQUFLO3VCQUFDLEVBQUMsUUFBUSxFQUFHLEtBQUssRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBpbnRlcnZhbCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tsaWJUeXBpbmddJyxcclxuICBzdGFuZGFsb25lOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQgLCBPbkRlc3Ryb3l7XHJcblxyXG4gIEBJbnB1dCh7cmVxdWlyZWQgOiB0cnVlfSkgdGV4dCAhOiBzdHJpbmc7XHJcbiAgQElucHV0KHtyZXF1aXJlZCA6IGZhbHNlfSkgbmF0aXZlQ29udGFpbmVyICE6IEhUTUxFbGVtZW50O1xyXG5cclxuICB0aW1lciA9IGludGVydmFsKDMwKTtcclxuICB0aW1lclN1YiAhOiBTdWJzY3JpcHRpb247XHJcbiAgaW5kZXggOiBudW1iZXIgPSAwO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWwgOiBFbGVtZW50UmVmICwgcHJpdmF0ZSByZW5kZXJlciA6IFJlbmRlcmVyMikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYXBwbHlUeXBpbmdFZmZlY3QoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2FwcGx5VHlwaW5nRWZmZWN0KCkgOiB2b2lkXHJcbiAge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB0aGlzLnRpbWVyU3ViID0gdGhpcy50aW1lci5waXBlKFxyXG4gICAgICB0YWtlV2hpbGUoKCkgPT4gdGhpcy5pbmRleCA8PSB0aGlzLnRleHQubGVuZ3RoKVxyXG4gICAgKVxyXG4gICAgLnN1YnNjcmliZSgoKSA9PntcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ICs9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgIHRoaXMubmF0aXZlQ29udGFpbmVyLnNjcm9sbFRvcCA9IHRoaXMubmF0aXZlQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcclxuICAgICAgdGhpcy5pbmRleCA9IHRoaXMuaW5kZXggKzE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYodGhpcy50aW1lclN1YilcclxuICAgIHtcclxuICAgICAgdGhpcy50aW1lclN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19