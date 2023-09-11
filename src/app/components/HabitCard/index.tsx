'use client';

import { Card, CardBody } from '@nextui-org/card';
import { useDisclosure } from '@nextui-org/use-disclosure';
import HabitDetailModal from './HabitDetailModal';
import { useEffect, useState, useTransition } from 'react';
import { intervalToDuration } from 'date-fns';

interface Props {
  name: string;
  dates: string[];
  isBadHabit?: boolean;
}

export default function HabitCard({ name, dates, isBadHabit }: Props) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [streakCount, setStreakCount] = useState(0);
  const [_, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      dates.sort().reverse();

      let tempStreakCount = 0;
      for (let i = 0; i < dates.length; i++) {
        if (i === 0) continue;

        const curr = dates[i];
        const { days } = intervalToDuration({
          start: new Date(curr),
          end: new Date(dates[i - 1]),
        });
        if (days === 1) tempStreakCount++;
        else break;
      }

      setStreakCount(tempStreakCount);
    });
  }, [dates]);

  return (
    <>
      <Card onPress={onOpen} isPressable className={`w-full ${isBadHabit ? 'bg-danger-400 text-white' : ''}`}>
        <CardBody className="flex flex-row items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <sub>Counter</sub>
            <div className="text-2xl font-bold">{dates.length}</div>
            {streakCount > 2 && <sub>Streak!</sub>}
          </div>
          <div className="flex-1">
            <p>{name}</p>
          </div>
        </CardBody>
      </Card>

      <HabitDetailModal
        streakCount={streakCount}
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        dates={dates}
        name={name}
        isBadHabit={isBadHabit}
      />
    </>
  );
}
