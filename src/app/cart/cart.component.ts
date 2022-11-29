import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Shirt } from '../shirt/Shirt';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartList$: Observable<Shirt[]>;

  constructor(private cart : CartService) {
    this.cartList$ = cart.cartList.asObservable(); }

  ngOnInit(): void {
  }

}
