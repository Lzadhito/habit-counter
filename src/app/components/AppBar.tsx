'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';

export default function AppBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">HABIT COUNTER</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex" justify="end">
        <NavbarItem>
          <Button color="primary" href="#" variant="flat">
            Workspace
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
