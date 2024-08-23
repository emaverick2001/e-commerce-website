import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ShoppingBag } from "lucide-react";
import React from "react";

const NavbarActions = () => {
  return (
    <div>
      <Button
        isExternal
        as={Link}
        className="text-sm font-normal text-default-600 bg-default-100"
        href={siteConfig.links.sponsor}
        variant="flat"
      >
        <ShoppingBag size={20} color="black" />
        <span className="ml-2 text-sm font-medium text-black">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
