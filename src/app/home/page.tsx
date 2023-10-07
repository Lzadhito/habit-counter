import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AppBar from '@/app/components/AppBar';
import CreateHabitModal from '@/app/components/CreateHabitModal';
import HabitList from '@/app/components/HabitList';

export default async function HomePage() {
  const session = await getServerSession();
  if (!session || !session.user) redirect('/');
  return (
    <div className="flex flex-col min-h-screen polka">
      <AppBar />
      <HabitList />
      <CreateHabitModal />
    </div>
  );
}
