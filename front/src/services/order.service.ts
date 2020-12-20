import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from 'src/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }
  public find(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.REST_API_URI}/order/find`);
  }
  public add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.REST_API_URI}/order/add`, order);
  }
}
