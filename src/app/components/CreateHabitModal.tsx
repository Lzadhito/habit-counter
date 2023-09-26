'use client';

import { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Switch } from '@nextui-org/switch';
import { Select, SelectItem } from '@nextui-org/select';
import { useDisclosure } from '@nextui-org/use-disclosure';
import enumToSentence from '@/helpers/enumToSentence';

import { DEFAULT_NEW_HABIT_VALUES, OCCURENCE } from './constants';
import Icon from './Icon';

export default function CreateHabitModal() {
  const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();

  const [formValues, setFormValues] = useState(DEFAULT_NEW_HABIT_VALUES);

  // Reset input on modal close/open
  useEffect(() => {
    setFormValues(DEFAULT_NEW_HABIT_VALUES);
  }, [isOpen]);

  async function handleSubmitHabit() {
    const res = await fetch(`/api/habit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    const resp = await res.json();
    if (resp.success) onClose();
  }

  function handleChangeValue(name: keyof typeof DEFAULT_NEW_HABIT_VALUES, event: any) {
    const value = name === 'isBadHabit' ? event.target.checked : event.target.value;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <Button variant="shadow" onClick={onOpen} color="primary" isIconOnly className="fixed bottom-10 right-10">
        <Icon icon="plus" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <div className="text-foreground">
            <ModalHeader className="flex flex-col gap-1">Create New Habit</ModalHeader>
            <ModalBody>
              <Input
                label="New Habit Name"
                value={formValues.newHabit}
                onChange={(event) => handleChangeValue('newHabit', event)}
                placeholder="Drinking 2L of water everyday"
              />
              {!formValues.isBadHabit && (
                <div className="flex gap-2">
                  <Select
                    label="Occurence"
                    placeholder="Select occurence"
                    onChange={(event) => handleChangeValue('occurence', event)}
                  >
                    {Object.keys(OCCURENCE).map((key) => (
                      // @ts-ignore
                      <SelectItem className="text-foreground" key={OCCURENCE[key]} value={OCCURENCE[key]}>
                        {enumToSentence(key)}
                      </SelectItem>
                    ))}
                  </Select>
                  {Number(formValues.occurence) === OCCURENCE.CUSTOM && (
                    <Input
                      label="Days"
                      placeholder="days"
                      value={formValues.customOccurence}
                      type="number"
                      onChange={(event) => handleChangeValue('customOccurence', event)}
                    />
                  )}
                </div>
              )}
              <Switch
                color="danger"
                isSelected={formValues.isBadHabit}
                onChange={(event) => handleChangeValue('isBadHabit', event)}
              >
                Is it a bad habit?
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
    </>
  );
}
