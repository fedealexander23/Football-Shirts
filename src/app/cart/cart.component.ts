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

  deleteToCart(shirt: Shirt): void{
    shirt.quantity = 1;
    this.cart.deleteToCart(shirt);
    shirt.quantity = 0;
    console.log(shirt.stock);
  }
  
  buy(){
      alert('Felicitaciones por su compra, sera entregada muy pronto');
    }

  maxReached(m: String){
    alert(m);
  }

}
