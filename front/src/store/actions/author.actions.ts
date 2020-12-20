import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Author } from 'src/models/author.model';

export const LOAD_AUTHORS = '[AUTHOR] LOAD_AUTHORS';
export const LOAD_AUTHORS_COMPLETE = '[AUTHOR] LOAD_AUTHORS_COMPLETE';
export const LOAD_AUTHORS_ERROR = '[AUTHOR] LOAD_AUTHORS_ERROR';

export const UPDATE_AUTHOR = '[AUTHOR] UPDATE_AUTHOR';
export const UPDATE_AUTHOR_COMPLETE = '[AUTHOR] UPDATE_AUTHOR_COMPLETE';
export const UPDATE_AUTHOR_ERROR = '[AUTHOR] UPDATE_AUTHOR_ERROR';

export const ADD_AUTHOR = '[AUTHOR] ADD_AUTHOR';
export const ADD_AUTHOR_COMPLETE = '[AUTHOR] ADD_AUTHOR_COMPLETE';
export const ADD_AUTHOR_ERROR = '[AUTHOR] ADD_AUTHOR_ERROR';

export const DELETE_AUTHOR = '[AUTHOR] DELETE_AUTHOR';
export const DELETE_AUTHOR_COMPLETE = '[AUTHOR] DELETE_AUTHOR_COMPLETE';
export const DELETE_AUTHOR_ERROR = '[AUTHOR] DELETE_AUTHOR_ERROR';

export const LoadAuthors = createAction(LOAD_AUTHORS);
export const LoadAuthorsComplete = createAction(LOAD_AUTHORS_COMPLETE, props<{authors: Author[]}>());
export const LoadAuthorsError = createAction(LOAD_AUTHORS_ERROR, props<{error: Error}>());
export const AddAuthor = createAction(ADD_AUTHOR, props<{author: Author}>());
export const AddAuthorComplete = createAction(ADD_AUTHOR_COMPLETE, props<{author: Author}>());
export const AddAuthorError = createAction(ADD_AUTHOR_ERROR, props<{error: Error}>());
export const UpdateAuthor = createAction(UPDATE_AUTHOR, props<{author: Author}>());
export const UpdateAuthorComplete = createAction(UPDATE_AUTHOR_COMPLETE, props<{author: Author}>());
export const UpdateAuthorError = createAction(UPDATE_AUTHOR_ERROR, props<{error: Error}>());
export const DeleteAuthor = createAction(DELETE_AUTHOR, props<{author: Author}>());
export const DeleteAuthorComplete = createAction(DELETE_AUTHOR_COMPLETE, props<{author: Author}>());
export const DeleteAuthorError = createAction(DELETE_AUTHOR_ERROR, props<{error: Error}>());
