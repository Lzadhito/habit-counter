import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';

interface Props {
  name: string;
  count: number;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

export default function HabitDetailModal({ name, isOpen, onOpenChange, count, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <div className="text-foreground">
          <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
          <ModalBody>
            <p>Habit Done: {count}</p>
            <p>Streak: 5</p>
            <p className="text-success-500 text-center">You are doing excellent job! keep it going!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" variant="flat" onPress={onClose} fullWidth>
              I Did It Today!
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
}
