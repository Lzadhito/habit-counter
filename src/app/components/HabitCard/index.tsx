'use client';
import { useEffect, useState, useTransition } from 'react';

import { Card, CardBody } from '@nextui-org/card';
import { useDisclosure } from '@nextui-org/use-disclosure';
import HabitDetailModal from './HabitDetailModal';
import countStreak from '@/app/helpers/countStreak';

interface Props {
  habit: Habit;
}

export default function HabitCard({ habit }: Props) {
  const { id, done_dates, name, occurrence, is_bad_habit } = habit;
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [streakCount, setStreakCount] = useState(0);
  const [_, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      const streakCount = countStreak(done_dates);
      setStreakCount(streakCount);
    });
  }, [done_dates]);

  return (
    <>
      <Card onPress={onOpen} isPressable className={`w-full ${is_bad_habit ? 'bg-danger-400 text-white' : ''}`}>
        <CardBody className="flex flex-row items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <sub>Counter</sub>
            <div className="text-2xl font-bold">{done_dates.length}</div>
            {streakCount > 2 && <sub>Streak!</sub>}
          </div>
          <div className="flex-1">
            <p>{name}</p>
          </div>
        </CardBody>
      </Card>

      <HabitDetailModal
        id={id}
        occurence={occurrence}
        streakCount={streakCount}
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        dates={done_dates}
        name={name}
        isBadHabit={is_bad_habit}
      />
    </>
  );
}
