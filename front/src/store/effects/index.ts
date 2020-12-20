import { AuthorEffects } from "./author.effects";
import { BookEffects } from "./book.effects";
import { OrderEffects } from "./order.effects";
import { UserEffects } from "./user.effects";

export const effects: any[] = [
  BookEffects,
  UserEffects,
  OrderEffects,
  AuthorEffects
]

export * from './author.effects';
export * from './user.effects';
export * from './order.effects';
export * from './book.effects';
