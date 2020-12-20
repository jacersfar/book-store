import { createAction, props } from '@ngrx/store';
import { Order } from 'src/models/order.model';

export const LOAD_ORDERS = '[Order] LOAD_ORDERS';
export const LOAD_ORDERS_COMPLETE = '[Order] LOAD_ORDERS_COMPLETE';
export const LOAD_ORDERS_ERROR = '[Order] LOAD_ORDERS_ERROR';

export const ADD_ORDER = '[Order] ADD_ORDER';
export const ADD_ORDER_COMPLETE = '[Order] ADD_ORDER_COMPLETE';
export const ADD_ORDER_ERROR = '[Order] ADD_ORDER_ERROR';

export const LoadOrders = createAction(LOAD_ORDERS);
export const LoadOrdersComplete = createAction(LOAD_ORDERS_COMPLETE, props<{orders: Order[]}>());
export const LoadOrdersError = createAction(LOAD_ORDERS_ERROR, props<{error: Error}>());
export const AddOrder = createAction(ADD_ORDER, props<{order: Order}>());
export const AddOrderComplete = createAction(ADD_ORDER_COMPLETE, props<{order: Order}>());
export const AddOrderError = createAction(ADD_ORDER_ERROR, props<{error: Error}>());
