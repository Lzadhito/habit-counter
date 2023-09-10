'use client';

import { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

export default function LoginWorkspaceModal({ isOpen, onClose, onOpenChange }: Props) {
  const [workspaceValue, setWorkspaceValue] = useState({ username: '', password: '' });

  // Reset input on modal close/open
  useEffect(() => {
    setWorkspaceValue({ username: '', password: '' });
  }, [isOpen]);

  function handleSubmitHabit() {
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <div className="text-foreground">
          <ModalHeader className="flex flex-col gap-1">Workspace</ModalHeader>
          <ModalBody>
            <p>
              Using workspace will save your habit so you can access them with your partner and sync on the other device{' '}
            </p>
            <Input
              label="Username"
              value={workspaceValue.username}
              onChange={(event) => setWorkspaceValue((prev) => ({ ...prev, username: event.target.value }))}
              placeholder="johnfamily23"
            />
            <Input
              label="Password"
              type="password"
              value={workspaceValue.password}
              onChange={(event) => setWorkspaceValue((prev) => ({ ...prev, password: event.target.value }))}
              placeholder="password"
            />
          </ModalBody>
          <ModalFooter className="flex flex-col">
            <Button color="secondary" variant="flat" onPress={handleSubmitHabit} fullWidth>
              Sign Up
            </Button>
            <Button color="primary" variant="light" onPress={handleSubmitHabit}>
              Login
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
}
