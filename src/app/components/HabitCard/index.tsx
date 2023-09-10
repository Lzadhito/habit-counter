'use client';

import { Card, CardBody } from '@nextui-org/card';
import { useDisclosure } from '@nextui-org/use-disclosure';
import HabitDetailModal from './HabitDetailModal';

interface Props {
  name: string;
  count: number;
  isStreak?: boolean;
}

export default function HabitCard({ name, count, isStreak }: Props) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Card onPress={onOpen} isPressable className="w-full">
        <CardBody className="flex flex-row items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <sub>Counter</sub>
            <div className="text-2xl font-bold">{count}</div>
            {isStreak && <sub>Streak!</sub>}
          </div>
          <div className="flex-1">
            <p>{name}</p>
          </div>
        </CardBody>
      </Card>

      <HabitDetailModal onClose={onClose} isOpen={isOpen} onOpenChange={onOpenChange} count={count} name={name} />
    </>
  );
}
