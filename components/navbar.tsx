import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import Image from "next/image";
import NextLink from "next/link";

import NavbarActions from "./navbar-actions";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="logo" height={40} src="/images/logo.png" width={40} />
            <p className="font-bold text-inherit">Not Amazon</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        <NavbarActions />
      </NavbarContent>
    </NextUINavbar>
  );
};
