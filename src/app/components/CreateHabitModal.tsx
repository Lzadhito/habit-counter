'use client';

import { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Switch } from '@nextui-org/switch';
import { DEFAULT_NEW_HABIT_VALUES } from './constants';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

export default function CreateHabitModal({ isOpen, onOpenChange, onClose }: Props) {
  const [formValues, setFormValues] = useState(DEFAULT_NEW_HABIT_VALUES);

  // Reset input on modal close/open
  useEffect(() => {
    setFormValues(DEFAULT_NEW_HABIT_VALUES);
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
              value={formValues.newHabit}
              onChange={(event) => setFormValues((prev) => ({ ...prev, newHabit: event.target.value }))}
              placeholder="Drinking 2L of water everyday"
            />
            <Switch
              color="danger"
              isSelected={formValues.isBadHabit}
              onValueChange={(isBadHabit) => setFormValues((prev) => ({ ...prev, isBadHabit }))}
            >
              Is it bad habit?
            </Switch>
          </ModalBody>
          <ModalFooter>
            <Button
              color={formValues.isBadHabit ? 'danger' : 'primary'}
              variant="flat"
              onPress={handleSubmitHabit}
              fullWidth
            >
              Save Habit
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
}
