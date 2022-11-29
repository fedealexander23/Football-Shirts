import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Shirt } from './Shirt';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent {

  shirts: Shirt[] = [
    {
      image: 'assets/img/argentina-titu-2021.jpg',
      club: 'Argentina 2021',
      price: 11500,
      stock: 12,
      quantity: 0,
    },
    {
      image: 'assets/img/dinamarca-titu-2021.jpg',
      club: 'Dinamarca 2021',
      price: 7500,
      stock: 6,
      quantity: 0,
    },
    {
      image: 'assets/img/croacia-titu-2021.jpg',
      club: 'Croacia 2021',
      price: 7900,
      stock: 7,
      quantity: 0,
    },
    {
      image: 'assets/img/italia-sup-2022.jpg',
      club: 'Italia 2022',
      price: 9800,
      stock: 1,
      quantity: 0,  
    },
    {
      image: 'assets/img/belgium-titu-2021.jpg',
      club: 'Belgica 2021',
      price: 8300,
      stock: 2,
      quantity: 0,
    },
    {
      image: 'assets/img/uruguay-titu-2021.jpg',
      club: 'Uruguay 2021',
      price: 9800,
      stock: 9,
      quantity: 0,  
    },
  ]

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  addToCart(shirt: Shirt): void{
    this.cart.addToCart(shirt);
    shirt.stock -= shirt.quantity;
    shirt.quantity = 0;
  }

  maxReached(m: String){
    alert(m);
  }
}
