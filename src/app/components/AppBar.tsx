'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { signOut, useSession } from 'next-auth/react';

export default function AppBar({ className = '' }) {
  const { status } = useSession();
  async function handleSignOut() {
    await signOut({
      callbackUrl: '/',
    });
  }

  return (
    <Navbar maxWidth="full" className={className}>
      <NavbarBrand>
        <p className="font-bold text-inherit uppercase text-sm tracking-wide opacity-80">{"How's My Progress"}</p>
      </NavbarBrand>
      {status === 'authenticated' && (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="danger" variant="flat" onClick={handleSignOut}>
              Log Out
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
