import { TestBed } from '@angular/core/testing';

import { MercadoPagoCheckoutService } from './mercado-pago-checkout.service';

describe('MercadoPagoCheckoutService', () => {
  let service: MercadoPagoCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadoPagoCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
