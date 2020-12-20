import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { User } from "./user.model";

export class Client extends User {
  public admin: boolean;
  public cart: Cart;
  public name: string;
  public orderList: Order[];
  constructor(id: number,
              email: string,
              password: string,
              admin: boolean,
              name: string,
              orderList: Order[]
  ) {
    super(id,email, password);
    this.admin = admin;
    this.cart = new Cart([]);
    this.name = name;
    this.orderList = orderList;
  }
}
