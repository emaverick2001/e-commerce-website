import { Factory } from "@mikro-orm/seeder";
import { faker } from "@faker-js/faker";
import { Product } from "../entities/Product";

export class ProductFactory extends Factory<Product> {
  model = Product;

  definition(): Partial<Product> {
    return {
      _id: faker.string.uuid(),
      title: faker.commerce.productName(),
      img: faker.image.url(),
      description: faker.lorem.sentence(),
      price: parseInt(faker.commerce.price()),
    };
  }
}
