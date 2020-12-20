import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Admin } from 'src/models/admin.model';
import { Client } from 'src/models/client.model';
import { User } from 'src/models/user.model';
import * as fromUserActions from '../actions/user.actions';

export interface UserState {
  loggedInUser: Client | Admin;
  loading: boolean;
  error: Error;
}

export const initialState: UserState = {
  loggedInUser: null!,
  loading : false,
  error: null!
}

const userReducer = createReducer(
  initialState,
  on(fromUserActions.Login, state => ({...state, loading: true, loggedInUser: null!, error: null!})),
  on(fromUserActions.LoginComplete, (state, {user}) => ({...state, loading: false, loggedInUser: user, error: null!})),
  on(fromUserActions.loginError, (state, {error}) => ({...state, loading: false, loggedInUser: null!, error: error})),
  on(fromUserActions.Logout, (state) => ({...state, loading: false, loggedInUser: null!, error: null!}))
)

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action)
}

export const getLoggedInUser = (state: UserState) => state.loggedInUser;
export const getLoading = (state: UserState) => state.loading;
export const getError = (state: UserState) => state.error;


