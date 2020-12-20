import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { AuthorService } from "src/services/author.service";
import * as fromAuthorActions from '../actions/author.actions';

@Injectable()
export class AuthorEffects {
  constructor(
    private actions$: Actions,
    private authorService: AuthorService
  ) {}

  load$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthorActions.LoadAuthors),
      exhaustMap(action => this.authorService.find().pipe(
        map(authors => fromAuthorActions.LoadAuthorsComplete({authors: authors })),
        catchError(error => of(fromAuthorActions.LoadAuthorsError({error: error}))
      ))
    )
    ), { useEffectsErrorHandler: false }
  );

  add$ = createEffect(
    () =>  this.actions$.pipe(
      ofType(fromAuthorActions.AddAuthor),
      exhaustMap(action => this.authorService.add(action.author).pipe(
        map(author => fromAuthorActions.AddAuthorComplete({author})),
        catchError(error => of(fromAuthorActions.AddAuthorError({error: error})))
      ))
    ),
    { useEffectsErrorHandler: false}
  );

  update$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthorActions.UpdateAuthor),
      exhaustMap(action => this.authorService.update(action.author).pipe(
        map(author => fromAuthorActions.UpdateAuthorComplete({author: author})),
        catchError(error => of(fromAuthorActions.UpdateAuthorError({error: error})))
      ))
    ),
    { useEffectsErrorHandler: false }
  );

  delete$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthorActions.DeleteAuthor),
      exhaustMap(action => this.authorService.delete(action.author).pipe(
        map(author => fromAuthorActions.DeleteAuthorComplete({author: author})),
        catchError(error => of(fromAuthorActions.DeleteAuthorError({error: error})))
      ))
    )
  );
}
