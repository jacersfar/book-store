import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Client } from 'src/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private clientSubject: BehaviorSubject<Client> = new BehaviorSubject<Client>(JSON.parse(localStorage.getItem('cleint')!));
  constructor() {
  }
  public client(): Observable<Client> {
    return this.clientSubject.asObservable();
  }
  public updateClientSession(client: Client) {
    localStorage.setItem('client', JSON.stringify(client));
    this.clientSubject.next(client);
  }
  public clientLogin(client: Client) {
    localStorage.setItem('client', JSON.stringify(client));
    this.clientSubject.next(client);
  }
  public clientLogout() {
    localStorage.removeItem('client');
    this.clientSubject.complete();
  }
}
