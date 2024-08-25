import { Product } from "@/entities/Product";
import type { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { ProductFactory } from "./ProductFactory";

//     id: 0,
//     title: "Orange",
//     img: "/images/fruit-1.jpeg",
//     description: "Fresh orange from the garden",
//     price: "$5.50",

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    new ProductFactory(em).make(8);
  }
}
