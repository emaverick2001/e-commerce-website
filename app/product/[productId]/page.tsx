"use client";
import React from "react";

import products from "@/data/products";
import ProductCard from "@/components/ui/productCardImage";
import ProductList from "@/components/ui/productList";

const ProductPage = () => {
  // get the productId from the current page URL as it is the last
  //   const { productId } = router.;

  const url = window.location.href;
  const segments = url.split("/");
  const itemId = parseInt(segments[segments.length - 1]);

  const product = products.find((item) => item.id === Number(itemId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="product-card-container">
            <ProductCard item={product} />
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1>{product!.title}</h1>
            <p>{product!.description}</p>
            <p>{product!.price}</p>
          </div>
        </div>
        <hr className="my-10" />
        Related Items
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
