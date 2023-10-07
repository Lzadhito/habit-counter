'use client';

import useSWR from 'swr';
import HabitCard from '../HabitCard';
import { getQuery } from '@/app/lib/fetcher';
import { Skeleton } from '@nextui-org/skeleton';

export default function HabitList() {
  const { data: { habits } = {}, isLoading } = useSWR('/api/habit', getQuery);

  return (
    <main className="space-y-8 px-4 pt-4 sm:px-32">
      {isLoading
        ? new Array(4).fill(null).map((_, index) => (
            <Skeleton disableAnimation key={index} className="rounded-lg">
              <div className="w-full h-20" />
            </Skeleton>
          ))
        : habits?.map((habit: Habit, index: number) => <HabitCard key={`habit-${index}`} habit={habit} />)}
    </main>
  );
}
