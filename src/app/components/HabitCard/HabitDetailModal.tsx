import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Avatar, Chip } from '@nextui-org/react';

interface Props {
  name: string;
  dates: string[];
  isOpen: boolean;
  isBadHabit?: boolean;
  streakCount: number;
  onOpenChange: () => void;
  onClose: () => void;
}

export default function HabitDetailModal({
  name,
  isOpen,
  onOpenChange,
  dates,
  onClose,
  isBadHabit,
  streakCount,
}: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <div className="text-foreground">
          <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
          <ModalBody>
            <DayPicker
              selected={dates.map((date) => new Date(date))}
              classNames={{
                months: 'min-w-full mb-2',
                table: 'w-full',
                cell: 'rounded overflow-hidden',
                day_selected: `!rounded-[15%] text-white ${isBadHabit ? 'bg-danger-500' : 'bg-success-500'}`,
              }}
            />
            <p>Habit Done: {dates.length}</p>
            {streakCount > 1 ? (
              <>
                <Chip
                  size="lg"
                  color={isBadHabit ? 'danger' : 'success'}
                  variant="flat"
                  startContent={<Avatar color="danger" className="w-6 h-6 mr-1" name={streakCount.toString()} />}
                >
                  Streak
                </Chip>
                <p className={`${isBadHabit ? 'text-danger-700' : 'text-success-500'} text-center`}>
                  {isBadHabit ? "You're better than this. Keep it up!" : "You're doing excellent job. Keep it going!"}
                </p>
              </>
            ) : null}
          </ModalBody>
          <ModalFooter>
            <Button color={isBadHabit ? 'danger' : 'success'} variant="flat" onPress={onClose} fullWidth>
              {isBadHabit ? 'I Did It Today :(' : 'I Did It Today!'}
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
}
