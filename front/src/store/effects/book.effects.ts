import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { error } from "protractor";
import { of } from "rxjs";
import { catchError, exhaustMap, map, switchMap } from "rxjs/operators";
import { BookService } from "src/services/book.service";
import * as fromBookActions from '../actions/book.action';

@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}

  load$ = createEffect(
    () => {
      console.log('in effect');
      return this.actions$.pipe(
      ofType(fromBookActions.LoadBooks),
      switchMap(action => {
        console.log('in switchmap');
        return this.bookService.find().pipe(
          map(books => {
            console.log(books);
            return fromBookActions.LoadBooksComplete({books: books})}),
          catchError(error => {
            console.log(error);
            return of(fromBookActions.LoadBooksError({error: error}))}
        ))
      }
    )
    )}
  );

  add$ = createEffect(
    () =>  this.actions$.pipe(
      ofType(fromBookActions.AddBook),
      exhaustMap(action => this.bookService.add(action.book).pipe(
        map(book => fromBookActions.AddBookComplete({book})),
        catchError(error => of(fromBookActions.AddBookError({error: error})))
      ))
    ),
    { useEffectsErrorHandler: false}
  );

  update$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromBookActions.UpdateBook),
      exhaustMap(action => this.bookService.update(action.book).pipe(
        map(book => fromBookActions.UpdateBookComplete({book: book})),
        catchError(error => of(fromBookActions.UpdateBookError({error: error})))
      ))
    ),
    { useEffectsErrorHandler: false }
  );

  delete$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromBookActions.DeleteBook),
      exhaustMap(action => this.bookService.delete(action.book).pipe(
        map(book => fromBookActions.DeleteBookComplete({book: book})),
        catchError(error => of(fromBookActions.DeleteBookError({error: error})))
      ))
    )
  );
}
