import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Book } from 'src/models/book.model';

export const LOAD_BOOKS = '[BOOK] LOAD_BOOKS';
export const LOAD_BOOKS_COMPLETE = '[BOOK] LOAD_BOOKS_COMPLETE';
export const LOAD_BOOKS_ERROR = '[BOOK] LOAD_BOOKS_ERROR';

export const UPDATE_BOOK = '[BOOK] UPDATE_BOOK';
export const UPDATE_BOOK_COMPLETE = '[BOOK] UPDATE_BOOK_COMPLETE';
export const UPDATE_BOOK_ERROR = '[BOOK] UPDATE_BOOK_ERROR';

export const ADD_BOOK = '[BOOK] ADD_BOOK';
export const ADD_BOOK_COMPLETE = '[BOOK] ADD_BOOK_COMPLETE';
export const ADD_BOOK_ERROR = '[BOOK] ADD_BOOK_ERROR';

export const DELETE_BOOK = '[BOOK] DELETE_BOOK';
export const DELETE_BOOK_COMPLETE = '[BOOK] DELETE_BOOK_COMPLETE';
export const DELETE_BOOK_ERROR = '[BOOK] DELETE_BOOK_ERROR';

export const LoadBooks = createAction(LOAD_BOOKS);
export const LoadBooksComplete = createAction(LOAD_BOOKS_COMPLETE, props<{books: Book[]}>());
export const LoadBooksError = createAction(LOAD_BOOKS_ERROR, props<{error: Error}>());
export const AddBook = createAction(ADD_BOOK, props<{book: Book}>());
export const AddBookComplete = createAction(ADD_BOOK_COMPLETE, props<{book: Book}>());
export const AddBookError = createAction(ADD_BOOK_ERROR, props<{error: Error}>());
export const UpdateBook = createAction(UPDATE_BOOK, props<{book: Book}>());
export const UpdateBookComplete = createAction(UPDATE_BOOK_COMPLETE, props<{ book: Book}>());
export const UpdateBookError = createAction(UPDATE_BOOK_ERROR, props<{error: Error}>());
export const DeleteBook = createAction(DELETE_BOOK, props<{book: Book}>());
export const DeleteBookComplete = createAction(DELETE_BOOK_COMPLETE, props<{book: Book}>());
export const DeleteBookError = createAction(DELETE_BOOK_ERROR, props<{error: Error}>());


