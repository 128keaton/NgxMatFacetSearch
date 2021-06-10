import {Injector} from '@angular/core';

interface RawVCRefInjector {
  _lView: any[];
}

export class VCRefInjector {
  private readonly raw: RawVCRefInjector;

  constructor(injector: Injector) {
    this.raw = injector as unknown as RawVCRefInjector;
  }

  get parentIdentifier(): string | null {
    const parent = this.parent;
    if (!!parent) {
      return parent.tagName.toLowerCase();
    }

    return null;
  }

  get parent(): HTMLElement | null {
    if (!!this.raw && this.raw._lView && this.raw._lView.length > 0) {
      return this.raw._lView[0];
    }

    return null;
  }
}
