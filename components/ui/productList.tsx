import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import products from "../../data/products";
import styles from "./productList.module.css";

const ProductList = () => {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {products.map((item, index) => (
        <Card shadow="sm" key={index} isPressable>
          <CardHeader className="overflow-visible p-0">
            <Image
              alt="Card background"
              className="rounded-xl"
              height={270}
              src="/images/product.png"
              width={270}
            />
          </CardHeader>
          <CardBody className="py-2">
            <b>{item.title}</b>
            <p className="text-small">{item.description}</p>
            <span className={styles.priceButtonContainer}>
              <p className="text-default-500">{item.price}</p>
              <Button size="sm">Add to Cart</Button>
            </span>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
