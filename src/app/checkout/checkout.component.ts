import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  customerDetails = {
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit-card'
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  placeOrder() {
    if (!this.customerDetails.name || !this.customerDetails.email || !this.customerDetails.address) {
      alert('Please fill in all details.');
      return;
    }
    alert('Order placed successfully!');
    this.cartService.clearCart();
  }
}
