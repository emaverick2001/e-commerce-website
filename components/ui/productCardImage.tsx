import React from "react";
import { Image } from "@nextui-org/image";

const ProductCardImage = () => {
  return (
    <Image
      isBlurred
      isZoomed
      alt="Product Image"
      className="rounded-xl object-cover w-screen"
      src="/images/product.png"
    />
  );
};

export default ProductCardImage;
