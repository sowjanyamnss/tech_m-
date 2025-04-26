import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // ✅ Import Router
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],  // Add FormsModule here
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {} // ✅ Inject Router

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
    this.loadCart();
  }

  updateQuantity(itemId: number, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newQuantity = parseInt(inputElement.value, 10);
    
    if (!isNaN(newQuantity) && newQuantity > 0) {
      this.cartService.updateQuantity(itemId, newQuantity);
      this.calculateTotal();
    }
  }

  calculateTotal(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  // ✅ Add this missing method
  proceedToCheckout(): void {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout']); // ✅ Navigate to Checkout Page
    } else {
      alert('Your cart is empty!');
    }
  }
}
