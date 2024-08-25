// entities/Author.ts
import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";

import { Product } from "../entities/Product";

@Entity()
export class Cart {
  @PrimaryKey()
  _id!: string;

  @ManyToOne()
  product!: Product;

  @Property()
  quantity!: number;
}
