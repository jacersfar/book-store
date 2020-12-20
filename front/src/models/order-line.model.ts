import { Order } from "./order.model";
import { Product } from "./product.model";

export class OrderLine {
  public id: number;
  public order: Order;
  public product: Product;
  public quantity: number;
  constructor(
    id: number,
    order: Order,
    product: Product,
    quantity: number
    ) {
      this.id = id;
      this.order = order;
      this.product = product;
      this.quantity = quantity;
    }
}
