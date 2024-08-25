import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";

import config from "../../config/mikro-orm";
import { Product } from "../entities/Product";
export default async (req, res) => {
  const orm = await MikroORM.init(config);
  const products = await orm.em.find(Product);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ product: products }));
};
