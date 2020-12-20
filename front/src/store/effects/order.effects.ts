import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { OrderService } from "src/services/order.service";
import * as fromOrderActions from '../actions/order.actions';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  load$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromOrderActions.LoadOrders),
      exhaustMap(action => this.orderService.find().pipe(
        map(orders => fromOrderActions.LoadOrdersComplete({orders: orders })),
        catchError(error => of(fromOrderActions.LoadOrdersError({error: error}))
      ))
    )
    ), { useEffectsErrorHandler: false }
  );

  add$ = createEffect(
    () =>  this.actions$.pipe(
      ofType(fromOrderActions.AddOrder),
      exhaustMap(action => this.orderService.add(action.order).pipe(
        map(order => fromOrderActions.AddOrderComplete({order})),
        catchError(error => of(fromOrderActions.AddOrderError({error: error})))
      ))
    ),
    { useEffectsErrorHandler: false}
  );
}
