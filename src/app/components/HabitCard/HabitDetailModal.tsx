import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';

interface Props {
  name: string;
  count: number;
  isOpen: boolean;
  isBadHabit?: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

export default function HabitDetailModal({ name, isOpen, onOpenChange, count, onClose, isBadHabit }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <div className="text-foreground">
          <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
          <ModalBody>
            <p>Habit Done: {count}</p>
            <p>Streak: 5</p>
            <p className={`${isBadHabit ? 'text-danger-700' : 'text-success-500'} text-center`}>
              {isBadHabit ? "You're better than this. Keep it up!" : "You're doing excellent job. Keep it going!"}
            </p>
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
