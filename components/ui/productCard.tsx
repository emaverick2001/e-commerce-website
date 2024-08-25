"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

import styles from "./productList.module.css";

import { makeToast } from "@/utils/helpers";
import { useCartStore } from "@/app/store";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const [isClient, setIsClient] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setItemCount(itemCount + 1);
    addItem();
    makeToast("Item added to cart!");
  };

  const handleRemoveItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      removeItem();
    }
  };

  return (
    <Link className="block" href={`/product/${item.id}`}>
      <Card key={item.id} isPressable shadow="sm">
        <CardHeader className="overflow-visible p-0">
          <Image
            alt="Card background"
            className="rounded-xl bg-black"
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
            {isClient &&
              (itemCount > 0 ? (
                <>
                  <Button size="sm" onClick={handleRemoveItem}>
                    -
                  </Button>
                  <Button size="sm" onClick={handleAddItem}>
                    +
                  </Button>
                </>
              ) : (
                <Button size="sm" onClick={handleAddItem}>
                  Add to Cart
                </Button>
              ))}
          </span>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
