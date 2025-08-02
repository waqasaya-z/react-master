"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import navRoutes from "@/helper/common.routes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <NavigationMenu className="bg-black p-2.5 text-white">
      <NavigationMenuList>
        {navRoutes.map((route) => {
          return (
            <NavigationMenuLink
            key={route.path}
              href={route.path}
              active={pathName === route.path}
            >
              {route.name}
            </NavigationMenuLink>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
