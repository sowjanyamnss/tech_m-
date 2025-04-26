import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-home',
  standalone: true,
  // imports: [RouterLink, FormsModule,CommonModule],
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  authService = inject(AuthService);
  searchTerm: string = '';
  medicines: any[] = [
    { id: 1, name: 'RINOBANEDIF Nasal Ointment', price: 50,original: 54, imageUrl: 'assets/1.jpeg' },
    { id: 2, name: 'Erythromycin Lactobionate', price: 40,original: 60, imageUrl: 'assets/2.jpeg' },
    { id: 3, name: 'Odomos', price: 60,original: 85, imageUrl: 'assets/3.jpg' },
    { id: 4, name: 'Bisoprolol fumarate 2.5 mg', price: 30,original: 54, imageUrl: 'assets/4.jpeg' },
    { id: 5, name: 'Cetirizin', price: 40,original: 55, imageUrl: 'assets/5.jpeg' },
    { id: 6, name: 'Doxycyxlin', price: 20,original: 44, imageUrl: 'assets/6.jpeg' },
    { id: 7, name: 'Aspirin', price: 40,original: 60, imageUrl: 'assets/7.jpeg' },
    { id: 8, name: 'Citalopram', price: 15,original: 30, imageUrl: 'assets/8.jpeg' },
    { id: 9, name: 'Ibuprom Max Sprint 400mg', price: 80,original: 99, imageUrl: 'assets/9.jpeg' },
    { id: 10, name: 'Nurofen', price: 54,original: 70, imageUrl: 'assets/10.jpeg' },
    { id: 11, name: 'Benadryl', price: 52,original: 80, imageUrl: 'assets/11.jpeg' },
    { id: 12, name: 'Omerprazole', price: 40,original: 60, imageUrl: 'assets/12.jpeg' },
    { id: 13, name: 'Ibuprofen', price: 8,original: 15, imageUrl: 'assets/13.jpeg' },
    { id: 14, name: 'Omeprazol STADA 20mg', price: 28,original: 34, imageUrl: 'assets/14.jpeg' },
    { id: 15, name: 'Neurontin', price: 18,original: 20, imageUrl: 'assets/15.jpeg' },
    { id: 16, name: 'Ator 20mg', price: 15,original:40, imageUrl: 'assets/16.jpeg' }



  ];
  filteredMeds: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.filteredMeds = this.medicines;
  }

  filterMedicines(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredMeds = this.medicines.filter(med =>
      med.name.toLowerCase().includes(searchText)
    );
  }

  addToCart(medicine: any) {
    this.cartService.addToCart(medicine);
    alert(`${medicine.name} added to cart!`);
  }
}
