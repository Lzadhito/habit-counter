import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AppBar from '@/app/components/AppBar';
import HabitCard from '@/app/components/HabitCard';
import CreateHabitModal from '@/app/components/CreateHabitModal';

export default async function HomePage() {
  const session = await getServerSession();
  if (!session || !session.user) redirect('/');

  const resp = await fetch(`${process.env.NEXT_API_URL}/habit`, {
    method: 'GET',
    next: {
      tags: ['habits'],
    },
  });
  const { habits }: { habits: Habit[] } = await resp.json();

  return (
    <>
      <AppBar />
      <main className="space-y-8 px-4 pt-4 polka min-h-screen">
        {habits?.map((habit, index) => (
          <HabitCard key={`habit-${index}`} habit={habit} />
        ))}
      </main>
      <CreateHabitModal />
    </>
  );
}
