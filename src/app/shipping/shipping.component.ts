import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Shipping } from '../shipping'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts: Shipping[]

  constructor(private cartService: CartService) {
   }

  ngOnInit() {
    this.getShipping();
  }

  getShipping() {
    this.cartService.getShippingPrices()
    .subscribe(data => this.shippingCosts = data);
  }
}
