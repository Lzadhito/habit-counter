import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { sql } from '@vercel/postgres';
import { revalidateTag } from 'next/cache';
import getHabitList from './lib/getHabitList';

export async function GET() {
  const habits = await getHabitList();
  return NextResponse.json({
    habits,
  });
}

export async function POST(request: Request) {
  const { newHabit, isBadHabit, occurence } = await request.json();
  const session = await getServerSession();

  try {
    await sql`
      INSERT INTO HABIT(email, name, is_bad_habit, occurrence)
      VALUES (${session?.user?.email}, ${newHabit}, ${isBadHabit}, ${occurence})
    `;

    revalidateTag('habits');
    return NextResponse.json({ success: true, revalidated: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: error?.status });
  }
}
