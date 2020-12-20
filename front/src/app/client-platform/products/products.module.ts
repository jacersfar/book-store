import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProductsRoutingModule } from './products-routing.module';
import { BookCardComponent } from './book-card/book-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MainComponent, BookCardComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
