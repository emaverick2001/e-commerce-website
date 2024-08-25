// entities/Author.ts
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Product {
  @PrimaryKey()
  _id!: string;

  @Property()
  title!: string;

  @Property()
  img!: string;

  @Property({ type: "text" })
  description!: string;

  @Property()
  price!: GLfloat;
}
