import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/models/book.model';
import * as fromBookActions from '../actions/book.action';

export interface BookState extends EntityState<Book> {
  loading: boolean;
  error?: Error;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: BookState = adapter.getInitialState({
  loading: false,
  error: null!
})

const bookReducer = createReducer(
  initialState,
  on(fromBookActions.LoadBooks, state => ({...state, loading: true, error: null!})),
  on(fromBookActions.LoadBooksComplete, (state, {books}) => {
    console.log(books);
    return adapter.setAll(books, {...state, loading: false, error: null!});
  }),
  on(fromBookActions.LoadBooksError, (state, {error} )=> ({...state, loading: false, error: error})),
  on(fromBookActions.AddBook, state => ({...state, loading: true, error: null! })),
  on(fromBookActions.AddBookComplete, (state, {book}) => {
    return adapter.addOne(book, {...state, loading: false, error: null!});
  }),
  on(fromBookActions.AddBookError, (state, {error} )=> ({...state, loading: false, error: error})),
  on(fromBookActions.UpdateBook, state => ({...state, loading: true, error: null!})),
  on(fromBookActions.UpdateBookComplete, (state, {book}) => {
      return adapter.upsertOne(book, {...state, error: null!, loading:false
    } )
  }),
  on(fromBookActions.UpdateBookError, (state, {error} )=> ({...state, loading: false, error: error})),
  on(fromBookActions.DeleteBook, state => ({...state, loading: true, error: null!})),
  on(fromBookActions.DeleteBookComplete, (state, {book}) => {
    return adapter.removeOne(book.id, {...state, error: null!, loading: false});
  }),
  on(fromBookActions.DeleteBookError, (state, {error} )=> ({...state, loading: false, error: error})),
)
export function reducer(state: BookState | undefined, action: Action) {
  return bookReducer(state, action);
}
// Selector functions
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const SELECT_BOOK_IDS = selectIds;
export const SELECT_BOOKS = selectEntities;
export const SELECT_BOOK_ALL = selectAll;
export const SELECT_BOOK_COUNT = selectTotal;
export const SELECT_BOOK_LOADING = (state: BookState) => state.loading;
export const SELECT_BOOK_EROOR = (state: BookState) => state.error;
