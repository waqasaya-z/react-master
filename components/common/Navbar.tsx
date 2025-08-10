'use client';

import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React from 'react';

import AccountDropdown from '../auth/AccountDropdown';
import AuthComponent from '../auth/AuthComponent';
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from '../ui/navigation-menu';
import { Skeleton } from '../ui/skeleton';

import DropdownMenuOptions from './DropdownMenuOptions';
import Modal from './Modal/Modal';
import NextLink from './NextLink';

import navRoutes from '@/helper/common.routes';
import { cn } from '@/lib/utils';
import Box from './Box';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const [openDropdownMenu, setOpenDropdownMenu] = React.useState(false);
  const pathName = usePathname();

  const handleDropdown = () => {
    setOpenDropdownMenu(!openDropdownMenu);
  };

  const handleModal = () => {
    setOpenAuthModal(!openAuthModal);
  };

  return (
    <>
      <NavigationMenu className="bg-black py-2.5 text-white flex items-center justify-between">
        <NavigationMenuLink> </NavigationMenuLink>
        <NavigationMenuList>
          {navRoutes.map((route) => {
            return (
              <NavigationMenuLink key={route.path} asChild>
                <NextLink
                  href={route.path}
                  className={cn(
                    'px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors',
                    route.path === pathName && 'bg-white text-black',
                  )}
                >
                  {route.name}
                </NextLink>
              </NavigationMenuLink>
            );
          })}
        </NavigationMenuList>
        {!session && (
          <NavigationMenuLink className="mr-12 cursor-pointer" onClick={handleModal}>
            Login
          </NavigationMenuLink>
        )}
        {status === 'loading' ? (
          <Skeleton />
        ) : session ? (
          <>
            <DropdownMenuOptions
              open={openDropdownMenu}
              onClose={handleDropdown}
              label="My Account"
              trigger={
                <NavigationMenuLink className="mr-12 cursor-pointer" onClick={handleDropdown}>
                  {session.user?.name}
                </NavigationMenuLink>
              }
              children={<AccountDropdown />}
            />
          </>
        ) : null}
      </NavigationMenu>
      <Modal open={openAuthModal} onClose={handleModal} content={<AuthComponent />} title={<Box tag='h2' className='font-bold'> Get Started. </Box>} />
    </>
  );
};

export default Navbar;
