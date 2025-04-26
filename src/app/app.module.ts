import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CartComponent
    
  ],
  providers: [],
})
export class AppModule { }
