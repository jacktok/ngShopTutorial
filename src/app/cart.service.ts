import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Product } from './product';
import { Shipping } from './shipping';
import { EventEmitter } from 'events';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  items = [];
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<Shipping[]> {
    const xx =  this.http.get<Shipping[]>("/assets/shipping.json")
    return xx;
  }
}
