import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from 'src/models/admin.model';
import { Cart } from 'src/models/cart.model';
import { Client } from 'src/models/client.model';
import { OrderLine } from 'src/models/order-line.model';
import { User } from 'src/models/user.model';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  public find(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.REST_API_URI}/user/all`);
  }
  public authenticate(email: string, password: string): Observable<Admin | Client> {
    return this.http.get<any>(`${environment.REST_API_URI}/user/authenticate?email=${email}&password=${password}`).pipe(
      map(
        user => {
          if (user.admin === true ) {
            return new Admin(user.id, user.email, user.password, user.name, true);
          } else {
            return new Client(user.id, user.email, user.password, user.admin ,user.name, user.orderList);
          }
        }
      )
    );
  }
}
