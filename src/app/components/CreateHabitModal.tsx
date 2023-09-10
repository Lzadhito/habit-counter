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

export default function CreateHabitModal({ isOpen, onOpenChange, onClose }: Props) {
  const [newValue, setNewValue] = useState('');

  // Reset input on modal close/open
  useEffect(() => {
    setNewValue('');
  }, [isOpen]);

  function handleSubmitHabit() {
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <div className="text-foreground">
          <ModalHeader className="flex flex-col gap-1">Create New Habit</ModalHeader>
          <ModalBody>
            <Input
              label="New Habit Name"
              value={newValue}
              onChange={(event) => setNewValue(event.currentTarget.value)}
              placeholder="Drinking 2L of water everyday"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" variant="flat" onPress={handleSubmitHabit} fullWidth>
              Save Habit
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
}
