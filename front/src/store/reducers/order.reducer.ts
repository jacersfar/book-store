import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Order } from 'src/models/order.model';
import * as fromOrderActions from '../actions/order.actions';

export interface OrderState extends EntityState<Order> {
  loading: boolean;
  error?: Error;
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialState: OrderState = adapter.getInitialState({
  loading: false,
  error: null!
});

const orderReducer = createReducer(
  initialState,
  on(fromOrderActions.LoadOrders , state => ({...state, loading: true, error: null!})),
  on(fromOrderActions.LoadOrdersComplete, (state, {orders }) => {
    return adapter.setAll(orders, {...state, loading: false, error: null!})
  }),
  on(fromOrderActions.LoadOrdersError, (state, {error} )=> ({...state, loading: false, error: error})),
  on(fromOrderActions.AddOrder, state => ({...state, loading: true, error: null!})),
  on(fromOrderActions.AddOrderComplete, (state, {order}) => {
    return adapter.addOne(order, {...state, loading: false, error: null!})
  }),
  on(fromOrderActions.AddOrderError, (state, {error} )=> ({...state, loading: false, error: error}))
)

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}

// Selector functions

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const SELECT_ORDER_IDS = selectIds;
export const SELECT_ORDERS = selectEntities;
export const SELECT_ORDER_ALL = selectAll;
export const SELECT_ORDER_COUNT = selectTotal;
export const SELECT_ORDER_LOADING = (state: OrderState) => state.loading;
export const SELECT_ORDER_EROOR = (state: OrderState) => state.error;
