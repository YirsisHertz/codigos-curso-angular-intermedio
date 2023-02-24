import { Injectable } from '@angular/core';
import { sum } from '../helpers/sum';

@Injectable({
  providedIn: 'root',
})
export class MercadoPagoCheckoutService {
  constructor() {
    sum(1, 2);
  }
}
