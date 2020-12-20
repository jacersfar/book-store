import * as fromUserReducer from './user.reducer';
import * as fromOrderReducer from './order.reducer';
import * as fromBookReducer from './book.reducer';
import * as fromAuthorReducer from './author.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  user: fromUserReducer.UserState,
  order: fromOrderReducer.OrderState,
  book: fromBookReducer.BookState,
  author: fromAuthorReducer.AuthorState
}

export const reducers: ActionReducerMap<State> = {
  user: fromUserReducer.reducer,
  order: fromOrderReducer.reducer,
  book: fromBookReducer.reducer,
  author: fromAuthorReducer.reducer
};

// User SELECTORS
export const SELECT_USER = createFeatureSelector<fromUserReducer.UserState>('user');
export const SELECT_USER_LOGGED_IN_USER = createSelector(SELECT_USER, fromUserReducer.getLoggedInUser);
export const SELECT_USER_LOADING = createSelector(SELECT_USER, fromUserReducer.getLoading);
export const SELECT_USER_ERROR = createSelector(SELECT_USER, fromUserReducer.getError);

// Order SELECTORs
export const SELECT_ORDER = createFeatureSelector<fromOrderReducer.OrderState>('order');
export const SELECT_ORDER_IDS = createSelector(SELECT_ORDER, fromOrderReducer.SELECT_ORDER_IDS);
export const SELECT_ORDER_ENTITIES = createSelector(SELECT_ORDER, fromOrderReducer.SELECT_ORDERS);
export const SELECT_ORDER_ALL = createSelector(SELECT_ORDER, fromOrderReducer.SELECT_ORDER_ALL);
export const SELECT_ORDER_COUNT = createSelector(SELECT_ORDER, fromOrderReducer.SELECT_ORDER_COUNT);
export const SELECT_ORDER_LOADING = createSelector(SELECT_ORDER, fromOrderReducer.SELECT_ORDER_LOADING);
export const SELECT_ORDER_ERROR = createSelector(SELECT_ORDER, fromOrderReducer.SELECT_ORDER_EROOR);

// Book SELECTORs
export const SELECT_BOOK = createFeatureSelector<fromBookReducer.BookState>('book');
export const SELECT_BOOK_IDS = createSelector(SELECT_BOOK, fromBookReducer.SELECT_BOOK_IDS);
export const SELECT_BOOK_ENTITIES = createSelector(SELECT_BOOK, fromBookReducer.SELECT_BOOKS);
export const SELECT_BOOK_ALL = createSelector(SELECT_BOOK, fromBookReducer.SELECT_BOOK_ALL);
export const SELECT_BOOK_COUNT = createSelector(SELECT_BOOK, fromBookReducer.SELECT_BOOK_COUNT);
export const SELECT_BOOK_LOADING = createSelector(SELECT_BOOK, fromBookReducer.SELECT_BOOK_LOADING);
export const SELECT_BOOK_ERROR = createSelector(SELECT_BOOK, fromBookReducer.SELECT_BOOK_EROOR);

// Author SELECTORs
export const SELECT_AUTHOR = createFeatureSelector<fromAuthorReducer.AuthorState>('author');
export const SELECT_AUTHOR_IDS = createSelector(SELECT_AUTHOR, fromAuthorReducer.SELECT_AUTHOR_IDS);
export const SELECT_AUTHOR_ENTITIES = createSelector(SELECT_AUTHOR, fromAuthorReducer.SELECT_AUTHORS);
export const SELECT_AUTHOR_ALL = createSelector(SELECT_AUTHOR, fromAuthorReducer.SELECT_AUTHOR_ALL);
export const SELECT_AUTHOR_COUNT = createSelector(SELECT_AUTHOR, fromAuthorReducer.SELECT_AUTHOR_COUNT);
export const SELECT_AUTHOR_LOADING = createSelector(SELECT_AUTHOR, fromAuthorReducer.SELECT_AUTHOR_LOADING);
export const SELECT_AUTHOR_ERROR = createSelector(SELECT_AUTHOR, fromAuthorReducer.SELECT_AUTHOR_EROOR);


