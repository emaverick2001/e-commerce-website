// components/ProductList.tsx
import React from "react";

import ProductCard from "./productCard";

import products from "@/data/products";

const ProductList = async () => {
  // const orm = await MikroORM.init(config);
  // const products = await orm?.em.find(Product, {});
  // console.log(products);
  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4">
      {products.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
