import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter;

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter;

  ngOnInit(): void {
  }

  upQuantity(): void{
      if(this.quantity < this.max){
        this.quantity++;
       this.quantityChange.emit(this.quantity);
      }else{
        this.maxReached.emit("Se alcanzo el maximo");
      }
    }

  downQuantity(): void{
    if(this.quantity > 0)
      this.quantity--
      this.quantityChange.emit(this.quantity);
  }
}
