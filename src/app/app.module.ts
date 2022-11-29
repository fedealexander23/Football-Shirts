import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShirtComponent } from './shirt/shirt.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ShopShirtComponent } from './shop-shirt/shop-shirt.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShirtComponent,
    CartComponent,
    AboutComponent,
    ShopShirtComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
