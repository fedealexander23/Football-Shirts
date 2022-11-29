import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShirtComponent } from './shirt/shirt.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ShopShirtComponent } from './shop-shirt/shop-shirt.component';

@NgModule({
  declarations: [
    AppComponent,
    ShirtComponent,
    CartComponent,
    AboutComponent,
    ShopShirtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
