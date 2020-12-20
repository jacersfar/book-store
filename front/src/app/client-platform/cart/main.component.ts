import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { element } from 'protractor';
import { Cart } from 'src/models/cart.model';
import { Client } from 'src/models/client.model';
import { OrderLine } from 'src/models/order-line.model';
import { Order } from 'src/models/order.model';
import { SessionService } from 'src/services/session.service';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  clientLoaded: boolean = false;
  displayedColumns: string[] = ['product', 'quantity', 'tools'];
  client!: Client;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  constructor(
    private store: Store<fromStore.State>,
    private sessionService: SessionService,
    private cdr: ChangeDetectorRef) { }
  dataSource: MatTableDataSource<OrderLine> = null!;
  ngOnInit(): void {

    this.sessionService.client().subscribe(
      client => {
        this.client= client;
        this.clientLoaded = true;
        this.cdr.detectChanges();
        this.dataSource = new MatTableDataSource<OrderLine>(client.cart.cartItems);
        this.dataSource.paginator = this.paginator;
      }
    )
  }
  getTotal(): number {
    let temp: number = 0;
    for (const ol of this.client.cart.cartItems) {
      temp += ol.product.price * ol.quantity;
    }
    return temp;
  }
  purchase() {
    let order: Order = new Order(null!, new Date(), 'COMPLETE', this.client.cart.cartItems, this.client);
    this.store.dispatch(fromStore.AddOrder({order: order}));
    this.client.cart = new Cart([]);
    this.client.orderList.push(order);
    this.sessionService.updateClientSession(this.client);
  }

  remove(productId: number) {
    this.client.cart.cartItems.splice(this.client.cart.cartItems.findIndex(element => {
      return element.product.id === productId
    }),1);
    this.sessionService.updateClientSession(this.client);
  }
}
