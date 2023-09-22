import { DUMMY_HABIT_LIST } from '@/app/dummy';
import HabitCard from '@/app/components/HabitCard';
import AppBar from '@/app/components/AppBar';
import CreateHabitModal from '@/app/components/CreateHabitModal';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const session = await getServerSession();
  if (!session || !session.user) redirect('/');

  return (
    <>
      <AppBar />
      <main className="space-y-8 px-4 pt-4 polka">
        {[...DUMMY_HABIT_LIST, ...DUMMY_HABIT_LIST, ...DUMMY_HABIT_LIST, ...DUMMY_HABIT_LIST, ...DUMMY_HABIT_LIST].map(
          (habit, index) => (
            <HabitCard key={`habit-${index}`} habit={habit} />
          )
        )}
      </main>
      <CreateHabitModal />
    </>
  );
}
