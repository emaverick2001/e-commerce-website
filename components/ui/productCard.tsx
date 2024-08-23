import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const ProductCard = () => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start"></CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="rounded-xl"
          height={270}
          src="/images/product.png"
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default ProductCard;
