import React from "react";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";

const AccountDropdown = () => {
  return (
    <>
      <DropdownMenuGroup>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
        Log out
      </DropdownMenuItem>
    </>
  );
};

export default AccountDropdown;
