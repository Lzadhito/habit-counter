import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';

export default async function getHabitList() {
  const session = await getServerSession();
  const { rows: habits } = await sql`
    SELECT * FROM HABIT
    WHERE email = ${session?.user?.email}
    ORDER BY created_at DESC;
  `;

  return habits;
}
