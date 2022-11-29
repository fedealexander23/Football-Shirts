import { Component } from '@angular/core';
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
      club: 'Rauch',
      price: 200,
      stock: 2,
      quantity: 0,
    },
    {
      image: 'assets/img/dinamarca-titu-2021.jpg',
      club: 'Porter',
      price: 220,
      stock: 5,
      quantity: 0,
    },
    {
      image: 'assets/img/croacia-titu-2021.jpg',
      club: 'Rauch',
      price: 200,
      stock: 2,
      quantity: 0,
    },
    {
      image: 'assets/img/italia-sup-2022.jpg',
      club: 'Porter',
      price: 220,
      stock: 0,
      quantity: 0,  
    },
    {
      image: 'assets/img/croacia-titu-2021.jpg',
      club: 'Rauch',
      price: 200,
      stock: 2,
      quantity: 0,
    },
    {
      image: 'assets/img/italia-sup-2022.jpg',
      club: 'Porter',
      price: 220,
      stock: 0,
      quantity: 0,  
    },
    {
      image: 'assets/img/croacia-titu-2021.jpg',
      club: 'Rauch',
      price: 200,
      stock: 2,
      quantity: 0,
    },
    {
      image: 'assets/img/italia-sup-2022.jpg',
      club: 'Porter',
      price: 220,
      stock: 0,
      quantity: 0,  
    }
  ]

}
