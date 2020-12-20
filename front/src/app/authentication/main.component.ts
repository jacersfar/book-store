import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Admin } from 'src/models/admin.model';
import { Client } from 'src/models/client.model';
import { User } from 'src/models/user.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  displayRegisterForm: boolean = false;

  loggedInUserSub: Subscription = null!;
  errorSub: Subscription = null!;

  loggedInUser$: Observable<Client | Admin> = this.store.select(fromStore.SELECT_USER_LOGGED_IN_USER);
  error$: Observable<Error> = this.store.select(fromStore.SELECT_USER_ERROR);

  error: Error = null!;

  constructor(private store: Store<fromStore.State>, private router: Router) {
    this.load();
  }
  ngOnDestroy(): void {
    if (this.errorSub !== null)
      this.errorSub.unsubscribe();
    if (this.loggedInUserSub != null)
      this.loggedInUserSub.unsubscribe();
  }
  private load() {
    this.loadUser();
    this.loadUserError();
  }
  private loadUser() {
    this.loggedInUserSub = this.loggedInUser$.subscribe(
      user => {
        if (user != null && user.admin) {
          localStorage.setItem('admin', JSON.stringify(user));
          this.router.navigate(['/admin/dashboard']);
        } else if (user !=null && !user.admin) {
          localStorage.setItem('client', JSON.stringify(user));
          this.router.navigate(['/home']);
        }
      }
    )
  }
  private loadUserError() {
    this.errorSub = this.error$.subscribe(
      error => this.error = error
    );
  }

  ngOnInit(): void {
  }

  public login() {
    this.store.dispatch(fromStore.Login({authCred: {email: this.email, password: this.password}}));
  }
  public register() {

  }
  public reset() {
    this.email = '';
    this.password = '';
    this.lastName = '';
    this.firstName = '';
  }
  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


}
