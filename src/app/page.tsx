'use client';

import { Button } from '@nextui-org/button';
import Icon from './components/Icon';
import { DUMMY_HABIT_LIST } from './dummy';
import HabitCard from './components/HabitCard';
import AppBar from './components/AppBar';
import CreateHabitModal from './components/CreateHabitModal';
import { useDisclosure } from '@nextui-org/use-disclosure';

export default function Page() {
  const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <AppBar />

      <main className="space-y-8 px-4 pt-4">
        {[...DUMMY_HABIT_LIST, ...DUMMY_HABIT_LIST, ...DUMMY_HABIT_LIST, ...DUMMY_HABIT_LIST, ...DUMMY_HABIT_LIST].map(
          (habit) => (
            <HabitCard key={habit.name} dates={habit.dates} name={habit.name} isBadHabit={habit.isBadHabit} />
          )
        )}
      </main>

      <Button variant="flat" onClick={onOpen} color="primary" isIconOnly className="fixed bottom-10 right-10">
        <Icon icon="plus" />
      </Button>

      <CreateHabitModal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </>
  );
}
