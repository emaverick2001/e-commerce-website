"use client";
import React from "react";

import products from "@/data/products";
import ProductCardImage from "@/components/ui/productCardImage";
import ProductList from "@/components/ui/productList";

export default function Page({ params }: { params: { productId: string } }) {
  const itemId = params.productId;

  const product = products.find((item) => item.id === Number(itemId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="px-4 py-10 sm:px-6 lg:px-8 text-black">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="product-card-container">
            <ProductCardImage />
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1>{product!.title}</h1>
            <p>{product!.description}</p>
            <p>{product!.price}</p>
          </div>
        </div>
        <hr className="my-10" />
        <div className="text-lg text-left">Similar Products</div>{" "}
      </div>
      <ProductList />
    </div>
  );
}
