import { OrderLine } from "./order-line.model";

export class Cart {
  constructor(public cartItems: OrderLine[]) {}
}
