import { Author } from "./author.model";
import { Product } from "./product.model"

export class Book extends Product {
  public title: string;
  public releaseDate: Date;
  public author: Author;
  constructor(
    id: number,
    price: number,
    quantity: number,
    title: string,
    releaseDate: Date,
    author: Author
      ) {
        super(id, price, quantity);
        this.title = title;
        this.releaseDate = releaseDate;
        this.author = author;
    }
}
