import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShopShirtComponent } from './shop-shirt/shop-shirt.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'shop',
  pathMatch: 'full'
},
{
  path: 'shop',
  component: ShopShirtComponent
},{
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
