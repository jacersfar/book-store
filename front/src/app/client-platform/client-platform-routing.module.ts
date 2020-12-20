import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';
import { MainComponent } from './main.component';
import { ProductsModule } from './products/products.module';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: 'cart',
    loadChildren: () => CartModule
  },
  {
    path: 'products',
    loadChildren: () => ProductsModule
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPlatformRoutingModule {}
