import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    let existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);// checks if the item already exixts in the cart or not
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
  }

  removeFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  updateQuantity(itemId: number, quantity: number) {
    let item = this.cartItems.find(cartItem => cartItem.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // ✅ **Added clearCart method**
  clearCart(): void {
    this.cartItems = []; // Clears all items from the cart
  }
}
