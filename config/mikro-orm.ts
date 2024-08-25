import { Options } from "@mikro-orm/core";
import { SqliteDriver } from "@mikro-orm/sqlite";
import { SeedManager } from "@mikro-orm/seeder";

import { Product } from "../entities/Product";
import { Cart } from "../entities/Cart";

const config: Options<SqliteDriver> = {
  dbName: "db.sqlite",
  driver: SqliteDriver,
  entities: [Product, Cart],
  extensions: [SeedManager],
  debug: true,
};

export default config;
