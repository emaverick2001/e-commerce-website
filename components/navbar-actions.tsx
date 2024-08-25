"use client";
import { useCartStore } from "@/app/store";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { ShoppingBag } from "lucide-react";
import React from "react";

const NavbarActions = () => {
  const items = useCartStore((state) => state.items);

  return (
    <div>
      <Button
        isExternal
        as={Link}
        className="text-sm font-normal text-default-600 bg-default-100"
        variant="flat"
      >
        <div className="relative inline-block">
          <ShoppingBag size={20} />
          <p className="absolute right-[-8px] bottom-[10px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]">
            {items}
          </p>
        </div>
      </Button>
    </div>
  );
};

export default NavbarActions;
