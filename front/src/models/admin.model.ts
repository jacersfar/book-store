import { User } from "./user.model";

export class Admin extends User {
  public name: string;
  public admin: boolean;
  constructor(id: number,
      email: string,
      password: string,
      name: string,
      admin: boolean
  ) {
    super(id,email, password);
    this.name = name;
    this.admin = admin
  }
}
