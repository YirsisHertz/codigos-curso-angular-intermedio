import { TestBed } from '@angular/core/testing';

import { PaypalCheckoutService } from './paypal-checkout.service';

describe('PaypalCheckoutService', () => {
  let service: PaypalCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypalCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
