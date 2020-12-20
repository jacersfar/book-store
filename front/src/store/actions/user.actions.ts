import { createAction, props } from '@ngrx/store';
import { Admin } from 'src/models/admin.model';
import { Client } from 'src/models/client.model';
import { User } from '../../models/user.model';

export const LOGIN = '[User] LOGIN';
export const LOGIN_COMPLETE = '[User] LOGIN_COMPLETE';
export const LOGIN_ERROR = '[User] LOGIN_ERROR';

export const LOGOUT = '[User] LOGOUT';

export interface authCred {
  email: string;
  password: string;
}
export const Login = createAction(LOGIN, props<{authCred: authCred}>());
export const LoginComplete = createAction(LOGIN_COMPLETE, props<{user: Admin | Client}>());
export const loginError = createAction(LOGIN_ERROR, props<{error: Error}>());
export const Logout = createAction(LOGOUT);
