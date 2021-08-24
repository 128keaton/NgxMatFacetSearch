import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[focusOnShow]'
})
export class FocusOnShowDirective implements OnInit {

  @Input('focusOnShow') timeout = 0;

  @Input('firstElement') first = true;

  constructor(private el: ElementRef) {
    if (!el.nativeElement.focus) {
      throw new Error('Element does not accept focus.');
    }
  }

  ngOnInit(): void {
    if (this.first) {
      setTimeout(() => {
        this.focusInput();
      }, (this.timeout || 0));
    }
  }


  private focusInput() {
    const input = this.el.nativeElement as HTMLInputElement;

    input.focus();


    if (this.el.nativeElement.hasOwnProperty('select')) {
      input.select();
    }
  }
}
