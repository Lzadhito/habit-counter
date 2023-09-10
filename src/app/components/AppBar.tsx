'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/use-disclosure';
import LoginWorkspaceModal from './LoginWorkspaceModal';

export default function AppBar() {
  const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">HABIT COUNTER</p>
        </NavbarBrand>
        <NavbarContent className="sm:flex" justify="end">
          <NavbarItem>
            <Button color="primary" href="#" variant="flat" onClick={onOpen}>
              Workspace
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <LoginWorkspaceModal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </>
  );
}
