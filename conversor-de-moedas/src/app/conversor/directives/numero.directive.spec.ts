import { ElementRef } from '@angular/core';

import { NumeroDirective } from './numero.directive';

describe('NumeroDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = null;
    const directive = new NumeroDirective(el);
    expect(directive).toBeTruthy();
  });
});
