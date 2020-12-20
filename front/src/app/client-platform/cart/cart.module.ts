import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class CartModule { }
