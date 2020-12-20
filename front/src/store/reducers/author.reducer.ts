import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Author } from 'src/models/author.model';
import * as fromAuthorActions from '../actions/author.actions';

export interface AuthorState extends EntityState<Author> {
  loading: boolean;
  error?: Error;
}

export const adapter: EntityAdapter<Author> = createEntityAdapter<Author>();

export const initialState: AuthorState = adapter.getInitialState({
  loading: false,
  error: null!
})

const authorReducer = createReducer(
  initialState,
  on(fromAuthorActions.LoadAuthors, state => ({...state, loading: true, error: null!})),
  on(fromAuthorActions.LoadAuthorsComplete, (state, {authors}) => {
    return adapter.setAll(authors, {...state, loading: false, error: null!});
  }),
  on(fromAuthorActions.LoadAuthorsError, (state, {error} )=> ({...state, loading: false, error: error})),
  on(fromAuthorActions.AddAuthor, state => ({...state, loading: true, error: null! })),
  on(fromAuthorActions.AddAuthorComplete, (state, {author}) => {
    return adapter.addOne(author, {...state, loading: false, error: null!});
  }),
  on(fromAuthorActions.AddAuthorError, (state, {error} )=> ({...state, loading: false, error: error})),
  on(fromAuthorActions.UpdateAuthor, state => ({...state, loading: true, error: null!})),
  on(fromAuthorActions.UpdateAuthorComplete, (state, {author}) => {
    return adapter.upsertOne(author, {...state, error: null!, loading:false} )
  }),
  on(fromAuthorActions.UpdateAuthorError, (state, {error} )=> ({...state, loading: false, error: error})),
  on(fromAuthorActions.DeleteAuthor, state => ({...state, loading: true, error: null!})),
  on(fromAuthorActions.DeleteAuthorComplete, (state, {author}) => {
    return adapter.removeOne(author.id, {...state, error: null!, loading: false});
  }),
  on(fromAuthorActions.DeleteAuthorError, (state, {error} )=> ({...state, loading: false, error: error})),
)
export function reducer(state: AuthorState | undefined, action: Action) {
  return authorReducer(state, action);
}
// Selector functions
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const SELECT_AUTHOR_IDS = selectIds;
export const SELECT_AUTHORS = selectEntities;
export const SELECT_AUTHOR_ALL = selectAll;
export const SELECT_AUTHOR_COUNT = selectTotal;
export const SELECT_AUTHOR_LOADING = (state: AuthorState) => state.loading;
export const SELECT_AUTHOR_EROOR = (state: AuthorState) => state.error;


