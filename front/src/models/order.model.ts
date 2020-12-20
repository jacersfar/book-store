import { Client } from "./client.model";
import { OrderLine } from "./order-line.model";

export class Order {
  public id: number;
  public orderDate: Date;
  public status: string;
  public orderLines: OrderLine[];
  public client: Client;
  constructor(
    id: number,
    orderDate: Date,
    status: string,
    orderLines: OrderLine[],
    client: Client
    ) {
      this.id = id;
      this.orderDate = orderDate;
      this.client = client;
      this.status = status;
      this.orderLines = orderLines;
    }
}
