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
      club: 'argentina',
      price: 200,
      stock: 8,
      quantity: 0,
    },
    {
      image: 'assets/img/dinamarca-titu-2021.jpg',
      club: 'dinamarca',
      price: 220,
      stock: 5,
      quantity: 0,
    },
    {
      image: 'assets/img/croacia-titu-2021.jpg',
      club: 'croacia',
      price: 200,
      stock: 3,
      quantity: 0,
    },
    {
      image: 'assets/img/italia-sup-2022.jpg',
      club: 'italia',
      price: 220,
      stock: 0,
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
