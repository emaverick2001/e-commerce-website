"use client"; // remove when accessing database
import React from "react";
import products from "../../data/products";
import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {products.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
