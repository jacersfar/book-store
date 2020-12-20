import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { UserService } from "src/services/user.service";
import * as fromUserActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  authenticate$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromUserActions.Login),
      exhaustMap(action => this.userService.authenticate(action.authCred.email, action.authCred.password).pipe(
        map(user => fromUserActions.LoginComplete({user: user})),
        catchError(error => of(fromUserActions.loginError(error)))
      ))
    ),
    { useEffectsErrorHandler: false}
  );
}
