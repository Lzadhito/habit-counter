import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/use-disclosure';
import { DayPicker } from 'react-day-picker';
import { Avatar } from '@nextui-org/avatar';
import { Chip } from '@nextui-org/chip';
import { OCCURENCE, OCCURENCE_VALUES_TO_KEY } from '@/app/components/constants';
import enumToSentence from '@/helpers/enumToSentence';

import Icon from '../Icon';
import 'react-day-picker/dist/style.css';

interface Props {
  id: number;
  name: string;
  dates: string[];
  isOpen: boolean;
  isBadHabit?: boolean;
  streakCount: number;
  occurence: number;
  onOpenChange: () => void;
  onClose: () => void;
}

export default function HabitDetailModal({
  id,
  name,
  isOpen,
  onOpenChange,
  dates,
  isBadHabit,
  streakCount,
  occurence,
}: Props) {
  const {
    isOpen: isOpenModalDelete,
    onOpen: onOpenModalDelete,
    onOpenChange: onOpenChangeModalDelete,
  } = useDisclosure();

  async function handleDoneHabit() {
    const res = await fetch('/api/habit/count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    const resp = await res.json();
    if (resp.success) location.reload();
  }

  async function handleDeleteHabit() {
    const res = await fetch('/api/habit', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    const resp = await res.json();
    if (resp.success) location.reload();
  }

  return (
    <>
      <Modal disableAnimation isOpen={isOpen} onOpenChange={onOpenChange}>
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
              <p>
                Occurence:{' '}
                {occurence === OCCURENCE.CUSTOM
                  ? `Every ${occurence} days`
                  : enumToSentence(OCCURENCE_VALUES_TO_KEY[occurence])}
              </p>
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
              <Button color={isBadHabit ? 'danger' : 'success'} variant="flat" onPress={handleDoneHabit} fullWidth>
                {isBadHabit ? 'I Did It Today :(' : 'I Did It Today!'}
              </Button>
              <Button isIconOnly color="danger" aria-label="delete" onPress={onOpenModalDelete}>
                <Icon icon="trash" type="solid" />
              </Button>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
      <Modal disableAnimation isOpen={isOpenModalDelete} onOpenChange={onOpenChangeModalDelete}>
        <ModalContent className="text-foreground">
          <ModalBody>
            <h3 className="text-xl font-bold">Are you sure you want to delete {name}?</h3>
          </ModalBody>
          <ModalFooter className="flex flex-col">
            <Button fullWidth color="danger" onClick={handleDeleteHabit}>
              Delete
            </Button>
            <Button fullWidth variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
